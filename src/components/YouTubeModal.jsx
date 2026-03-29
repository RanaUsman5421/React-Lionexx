import React from "react";
import { X } from "lucide-react";

const extractYouTubeVideoId = (url) => {
  try {
    const parsedUrl = new URL(url, window.location.origin);
    const hostname = parsedUrl.hostname.replace(/^www\./, "");

    if (hostname === "youtu.be") {
      return parsedUrl.pathname.split("/").filter(Boolean)[0] || "";
    }

    if (hostname === "youtube.com" || hostname === "m.youtube.com") {
      if (parsedUrl.pathname === "/watch") {
        return parsedUrl.searchParams.get("v") || "";
      }

      if (parsedUrl.pathname.startsWith("/embed/")) {
        return parsedUrl.pathname.split("/embed/")[1]?.split("/")[0] || "";
      }

      if (parsedUrl.pathname.startsWith("/shorts/")) {
        return parsedUrl.pathname.split("/shorts/")[1]?.split("/")[0] || "";
      }
    }
  } catch {
    return "";
  }

  return "";
};

const buildEmbedUrl = (url) => {
  const videoId = extractYouTubeVideoId(url);

  if (!videoId) {
    return "";
  }

  return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
};

const YouTubeModal = ({ isOpen, videoUrl, onClose }) => {
  const embedUrl = buildEmbedUrl(videoUrl);

  React.useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !embedUrl) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 py-6 sm:px-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="YouTube video player"
    >
      <div
        className="relative w-full max-w-5xl rounded-sm bg-white p-3 shadow-2xl sm:p-4"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-sm border border-black/10 bg-white text-[#062f3a] transition-colors duration-200 hover:bg-[#f4f8f9]"
          aria-label="Close video modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="w-full overflow-hidden rounded-sm bg-white pt-8">
          <div className="aspect-video w-full overflow-hidden rounded-sm">
            <iframe
              src={embedUrl}
              title="YouTube video"
              className="h-full w-full rounded-sm"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeModal;

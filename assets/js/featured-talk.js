// Keep the thumbnail a working YouTube link when JavaScript is unavailable.
// Load the embedded player only after the visitor chooses to watch.
document.querySelectorAll(".talk-player").forEach((player) => {
  const poster = player.querySelector(".talk-poster");
  poster.addEventListener("click", (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
      return;
    event.preventDefault();
    const frame = document.createElement("iframe");
    frame.src = `https://www.youtube-nocookie.com/embed/${player.dataset.videoId}?rel=0`;
    frame.title = player.dataset.videoTitle;
    frame.allow =
      "accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share";
    frame.allowFullscreen = true;
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    frame.tabIndex = 0;
    player.replaceChildren(frame);
    frame.focus();
  });
});

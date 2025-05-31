(async () => {
  const waitForVideo = () => new Promise(resolve => {
    const check = () => {
      const video = document.querySelector('video');
      if (video) return resolve(video);
      requestAnimationFrame(check);
    };
    check();
  });

  const video = await waitForVideo();
  console.log('✅ Video element found.');

  await video.play().catch(e => console.warn('Auto-play prevented:', e));
  console.log('▶️ Video playing.');

  const stream = video.captureStream();
  const recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
  const chunks = [];

  recorder.ondataavailable = e => {
    if (e.data.size > 0) chunks.push(e.data);
  };

  recorder.onstop = () => {
    if (chunks.length === 0) return alert('No data was recorded.');
    const blob = new Blob(chunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'instagram_story.webm';
    document.body.appendChild(a);
    a.click();
    a.remove();
    console.log('✅ Download complete!');
  };

  recorder.start();
  console.log('🔴 Recording started.');

  setTimeout(() => {
    if (recorder.state === 'recording') {
      recorder.stop();
      console.log('🛑 Timeout reached, recording stopped.');
    }
  }, (video.duration || 10) * 1000 + 500);

  video.addEventListener('ended', () => {
    if (recorder.state === 'recording') {
      recorder.stop();
      console.log('🛑 Video ended, recording stopped.');
    }
  }, { once: true });
})();

// This is still a work in progress.
// It mostly does not work when video acceleration is enabled.

function startRecording(videoElement) {
    let chunks = [];

    // Create a MediaStream from the video element
    const stream = videoElement.captureStream();

    // Check if the stream has tracks
    if (stream.getTracks().length === 0) {
        console.error('No audio or video tracks available. MediaRecorder cannot start.');
        return;
    }

    let mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/mp4' });

    // Collect the data as it becomes available
    mediaRecorder.ondataavailable = function(event) {
        console.log('Data available...', event.data, event);
        if (event.data.size > 0) {
            chunks.push(event.data);
        }
    };

    // When recording stops, create a Blob and trigger the download
    mediaRecorder.onstop = function() {
        console.log('On stop...', chunks);
        if (chunks.length === 0) {
            return;
        }
        const blob = new Blob(chunks, { type: 'video/mp4' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'instagram_story.mp4'; // Name the file
        document.body.appendChild(link);
        link.click(); // Trigger the download
        document.body.removeChild(link); // Clean up
    };

    mediaRecorder.onstart = () => {
        console.log('MediaRecorder started');
    };

    mediaRecorder.onerror = (event) => {
        console.error('Error in MediaRecorder:', event.error);
    };

    mediaRecorder.start(1000);
    console.log('Recording started...');

    return mediaRecorder;
}

// Function to handle video element changes
function handleVideoChange(mutationsList) {
    if (!window.currentVideos) {
        window.currentVideos = new Map();
    }

    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            const videoElements = document.querySelectorAll('video');

            for (let videoElement of videoElements) {
                if (!window.currentVideos.has(videoElement)) {
                    console.log('New video element found:', videoElement);
                    window.currentVideos.set(videoElement, undefined); // initialize with undefined

                    // Wait for the video metadata to load
                    videoElement.addEventListener('loadedmetadata', (event) => {
                        console.log('Video metadata loaded...', event);
                        let mediaRecorder = startRecording(videoElement);
                        window.currentVideos.set(videoElement, mediaRecorder);
                    });

                    videoElement.addEventListener('playing', () => {
                        console.log('Video is playing');
                    });
                }
            }

            for (let videoElement of window.currentVideos.keys()) {
                if (!document.body.contains(videoElement)) {
                    console.log('Video element has been removed');
                    let mediaRecorder = window.currentVideos.get(videoElement);
                    mediaRecorder.stop(); // Stop recording
                    window.currentVideos.delete(videoElement);
                }
            }
        }
    }
}

// Create a MutationObserver instance
const observer = new MutationObserver(handleVideoChange);

// Start observing the document for changes in child elements
observer.observe(document.body, {
    childList: true, // Watch for changes in child elements
    subtree: true // Watch for changes in all descendant elements
});

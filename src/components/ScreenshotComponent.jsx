import html2canvas from "html2canvas";

const ScreenshotComponent = () => {
  const captureScreenshot = () => {
    const element = document.getElementById("ordersent"); // Replace 'captureElement' with the ID of the element you want to capture

    if (element) {
      html2canvas(element).then((canvas) => {
        // Convert canvas to data URL
        const screenshotUrl = canvas.toDataURL("image/png");

        // Create an anchor element to trigger download
        const link = document.createElement("a");
        link.href = screenshotUrl;
        link.download = "screenshot.png"; // Set the desired file name

        // Trigger download
        link.click();
      });
    }
  };

  return (
    <div>
      <button onClick={captureScreenshot}>Capture and Save Screenshot</button>
    </div>
  );
};

export default ScreenshotComponent;

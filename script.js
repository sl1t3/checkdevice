document.addEventListener("DOMContentLoaded", function() {
    var deviceInfo = document.getElementById("device-info");
    
    var deviceModel = navigator.userAgent;
    var deviceName = navigator.appName;
    var deviceOS = navigator.platform;
    var deviceBrand = "Unknown"; // Device brand is not directly available
    
    var deviceInfoList = [
      { label: "Device Model", value: deviceModel },
      { label: "Device Name", value: deviceName },
      { label: "Operating System", value: deviceOS },
      { label: "Device Brand", value: deviceBrand }
    ];
    
    deviceInfoList.forEach(function(info) {
      var listItem = document.createElement("li");
      listItem.innerHTML = "<strong>" + info.label + ":</strong> " + info.value;
      deviceInfo.appendChild(listItem);
    });
  });
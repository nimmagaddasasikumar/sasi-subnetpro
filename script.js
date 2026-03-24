function calculate() {
  let cidr = document.getElementById("cidr").value;

  if (!cidr.includes("/")) {
    document.getElementById("output").innerHTML = "Invalid CIDR format";
    return;
  }

  let [ip, prefix] = cidr.split("/");
  prefix = parseInt(prefix);

  let mask = (0xffffffff << (32 - prefix)) >>> 0;

  function intToIp(int) {
    return [
      (int >>> 24) & 255,
      (int >>> 16) & 255,
      (int >>> 8) & 255,
      int & 255
    ].join(".");
  }

  function ipToInt(ip) {
    return ip.split(".").reduce((acc, octet) => (acc << 8) + parseInt(octet), 0) >>> 0;
  }

  let ipInt = ipToInt(ip);
  let network = ipInt & mask;
  let broadcast = network | (~mask >>> 0);

  let firstHost = network + 1;
  let lastHost = broadcast - 1;

  document.getElementById("output").innerHTML = `
    <p><b>Network:</b> ${intToIp(network)}</p>
    <p><b>Broadcast:</b> ${intToIp(broadcast)}</p>
    <p><b>First Host:</b> ${intToIp(firstHost)}</p>
    <p><b>Last Host:</b> ${intToIp(lastHost)}</p>
    <p><b>Total Hosts:</b> ${Math.pow(2, 32 - prefix) - 2}</p>
  `;
}

var requiredMajor = 20;
var version = process.versions.node;
var major = Number(version.split(".")[0]);

if (major < requiredMajor) {
  console.error("");
  console.error("This portfolio requires Node.js 20.9.0 or newer.");
  console.error("Current Node.js version: " + version);
  console.error("");
  console.error("Fix:");
  console.error("  nvm install 20");
  console.error("  nvm use");
  console.error("  npm install");
  console.error("  npm run dev");
  console.error("");
  console.error("Next.js 16 uses modern JavaScript syntax that Node 12 cannot parse.");
  process.exit(1);
}

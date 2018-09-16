const execSync = require('child_process').execSync;
const BTT = require('btt');

function escapeSpecialChars(string) {
  return string
    .replace(/\(/g, '')
    .replace(/\)/g, '')
    .replace(/"/g, '')
    .replace(/'/g, "")
    .replace(/`/g, '')
    .replace(/\n/g, '')
}

(async () => {
  const btt = new BTT.Btt({
    domain: '127.0.0.1',
    port: '64472',
    protocol: 'http',
    sharedKey: 'sBP2fYAo2Fu8TdfzhLpwdUm'
  });

  execSync('echo "[[rate 210]] '+escapeSpecialChars(await btt.state.get('selected_text'))+'" | say');
})();

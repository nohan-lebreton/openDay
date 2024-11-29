module.exports = {
    extends: ["config:base"],  // Hérite des configurations par défaut de Renovate
    hostRules: [
      {
        hostType: 'github',
        repository: 'nohan-lebreton/openDay'
      }
    ],
  };
  
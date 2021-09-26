module.exports = {

    async redirects() {
      return [
        {
          source: '/invite',
          destination: 'https://discordapp.com/oauth2/authorize?client_id=568169582884421652&scope=bot&permissions=8',
          permanent: true
        },
        {
          source: '/utip',
          destination: 'https://utip.io/s/1yhs7W',
          permanent: true
        },
        {
          source: '/discord',
          destination: 'https://discord.gg/Q7SqthtdEE',
          permanent: true
        }
      ];
    }
}
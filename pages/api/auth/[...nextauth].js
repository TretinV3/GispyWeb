import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"
export default NextAuth({
    // Configure one or more authentication providers  providers: 
    providers: [
        DiscordProvider({
            clientId: "861956851602948116",
            clientSecret: "h_CvcGuTY6MHWm7YX3nRmxLiBh-_g4IR"
        })
    ]
})
import { useSession, signIn, signOut } from "next-auth/client"

export default function Component() {
    const [session, loading] = useSession()
    //console.log(session[1])

    return (session ? (
        <>
            Signed in ! <br />
            <button onClick={() => signOut()}>Sign out</button>
        </>) : (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>)
    )
}

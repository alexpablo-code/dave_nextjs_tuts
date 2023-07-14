type Params = {
    params: {
        userId: string
    }
}

export default function Userpage({params: {userId}}: Params) {
    return (
        <div>page</div>
    )
}

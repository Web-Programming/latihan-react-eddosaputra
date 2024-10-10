import Link from 'next/link';

export default function Page(){
    return (
        <div>
            <h1>This is Dashboard Page</h1>
            <hr/>

            &bull; <Link href="/dashboard/users/Eddo Saputra/2327250007">Eddo Saputra</Link><br/>
            &bull; <Link href="/dashboard/users/John Doe/2327250006">John Doe</Link>
        </div>




    )
}
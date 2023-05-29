import { getUser } from '@/lib/auth'
import { User } from 'lucide-react'
import Image from 'next/image'

const GITHUB = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID

export const Profile = () => {
    const { name, avatarUrl } = getUser()
    return (
        <div className="flex items-center gap-3 text-left ">
            <Image
                src={avatarUrl}
                width={40}
                height={40}
                alt=""
                className="h-10 w-10 rounded-full"
            />

            <p className="max-w-[140px] text-sm font-bold leading-snug">
                {name}
                <a href="" className="hever:text-red-300 font-sans font-bold block text-red-400">
                    Sair
                </a>
            </p>
        </div>
    )
}

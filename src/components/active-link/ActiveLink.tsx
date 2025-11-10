import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

type ActiveLinkProps = LinkProps & {
    children: React.ReactNode;
}

export function ActiveLink({ children, href, ...rest }: ActiveLinkProps) {
    const router = useRouter();
    console.log("asPath:" + router.asPath, "href:" + href, "rest.as:" + rest.as)

    const isCurrentPath = router.asPath === href || router.asPath === rest.as;

    return (
        <Link href={href} className={cn('text-action-sm transition-colors hover:text-blue-200', isCurrentPath ? 'text-blue-200' : 'text-gray-100')}>{children}</Link>
    )
}
import Link from 'next/link'

export default function Topbar() {
  return (
    <div className="gradient-primary py-[12px] text-center text-[12px] capitalize">
      <p>
        We&lsquo;re assembling a United Tech Force to help non-profits and startups affected by the
        war
        <Link href="#" className="ml-4 underline">
          Get Involved
        </Link>
      </p>
    </div>
  )
}

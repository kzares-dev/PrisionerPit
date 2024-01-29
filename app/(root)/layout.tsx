import Navbar from "@/components/shared/Navbar"


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="">
            <Navbar />

            <div className="px-4">
                {children}
            </div>
        </div>
    )
}

export const navItems = [
    {
        name: "Features",
        href: "#Features",
    },
    {
        name: "Pricing",
        href: "#Pricing"
    },
    {
        name: "Testimonials",
        href: "#Testimonials",
    }
];

export const loginItems = [
    {
        buttonVariant: "tertiary",
        name: "Login",
        href: "#Login"
    },
    {
        buttonVariant: "primary",
        name: "Sign up",
        href: "#sign-up"
    }
];



export const Header = () => {
    return (
        <header className="border-b border-gray-200/20">
            <div className="container">
                <div className="h-18 flex items-center">
                    <div>
                        <div></div>
                        <div className="font-extrabold text-2xl">sphera.ai</div>
                    </div>
                    <div></div>
                    <div>
                        <button>
                            <div></div>
                            <div></div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
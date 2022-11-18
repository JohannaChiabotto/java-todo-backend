interface List {
    label: string;
    url: string;
}

type NavbarProps = {
    navLi: Array<List>;
}

export default function Navbar(props: NavbarProps) {
    return (<nav></nav>)
}
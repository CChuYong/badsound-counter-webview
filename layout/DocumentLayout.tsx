import {FaChevronLeft} from "react-icons/fa";
import {useEffect} from "react";
import {useRouter} from "next/router";

let returnPage: () => void = () => {};
export default function DocumentLayout({children, title}: {children: React.ReactNode, title: String}) {
    useEffect(() => {
        import('webview-javascript-bridge').then((ir) => {
            returnPage = () => {
                console.log('go back to return page..')
                ir.default.sendMessage({
                    action: 'return',
                });
            }
        })
    }, []);
    const router = useRouter();
    const color = router.query.bgColor ?? '1b1b1b';

    const dynamicReturn = () => {
        returnPage();
    }
    return <div>
        <style jsx global>{`
            * {
                background-color: #${color};
            }
        `}</style>
        <div style={{paddingLeft: 3, paddingBottom: 16}}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
            }}>
                <FaChevronLeft size={18} onClick={dynamicReturn}/>
                <a style={{fontSize: 20}}>{title}</a>
            </div>
        </div>

        {children}
    </div>
}

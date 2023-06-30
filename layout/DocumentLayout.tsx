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
    const color = router.query.bgColor ?? 'ffffff';

    const dynamicReturn = () => {
        returnPage();
    }
    return <div style={{

    }}>
        <style jsx global>{`
            * {
                background-color: #${color};
            }
            body {
                margin: 0;
            }
        `}</style>
        <div style={{
            paddingTop: 3,
            paddingLeft: 12,
            paddingBottom: 16,
            position: 'fixed',
            backgroundColor: `#${color}`,
            width: '100%'
        }}>
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
        <div style={{
            paddingTop: 45,
            paddingLeft: 16,
            paddingRight: 16,
        }}>
            {children}
        </div>

    </div>
}

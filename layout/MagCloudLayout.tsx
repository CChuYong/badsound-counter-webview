import {FaChevronLeft} from "react-icons/fa";
import {useEffect} from "react";
import {useRouter} from "next/router";

let returnPage: () => void = () => {};
export default function MagCloudLayout({children, title}: {children: React.ReactNode, title: String}) {
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
    return <div style={{  width: '100%'}}>
        <style jsx global>{`
            * {
                background-color: #${color};
            }
            body {
                margin: 0;
            }
        `}</style>
        <style jsx>{
            `
                .title-bar {
                    padding-left: 1.0714rem;
                    padding-right: 1.0714rem;
                     padding-top: 0.5714rem;
                      padding-bottom: 0.5714rem;
                }
                
                .title-icon {
                    height: 1.1428rem;
                    width: 1.1428rem;
                }
                
                .title-text {
                    font-size: 1.14285rem;
                    color: #57534E;
                }
            `
        }
        </style>
        <div style={{
            width: '100%',
            position: 'fixed',
            backgroundColor: `#${color}`,
        }}>
            <div className={'title-bar'} style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 8,
                paddingBottom:8,
            }}>
                <FaChevronLeft className={"title-icon"} size={18} color={"#57534E"} onClick={dynamicReturn}/>
                <a className={"title-text"}>{title}</a>
                <div className={"title-icon"} />
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

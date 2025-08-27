import {Fragment,useCallback,useContext,useEffect,useRef} from "react"
import {Box as RadixThemesBox,Button as RadixThemesButton,Checkbox as RadixThemesCheckbox,Flex as RadixThemesFlex,Heading as RadixThemesHeading,IconButton as RadixThemesIconButton,Link as RadixThemesLink,Text as RadixThemesText,TextField as RadixThemesTextField} from "@radix-ui/themes"
import {ColorModeContext,EventLoopContext} from "$/utils/context"
import {ReflexEvent,isTrue,refs} from "$/utils/state"
import {Moon as LucideMoon,Sun as LucideSun} from "lucide-react"
import {Link as ReactRouterLink} from "react-router"
import {jsx} from "@emotion/react"




function Iconbutton_108272057603238308839097621540397971161 () {
  const { toggleColorMode } = useContext(ColorModeContext)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, ReflexEvent, toggleColorMode])

  return (
    jsx(RadixThemesIconButton,{css:({ ["padding"] : "6px", ["position"] : "fixed", ["top"] : "2rem", ["right"] : "2rem", ["background"] : "transparent", ["color"] : "inherit", ["zIndex"] : "20", ["&:hover"] : ({ ["cursor"] : "pointer" }) }),onClick:on_click_9922dd3e837b9e087c86a2522c2c93f8},jsx(Fragment_144910753018416284489723083448110367524,{},))
  )
}


function Text_252062685252430353538893593861073303399 () {
  



  return (
    jsx(RadixThemesText,{align:"center",as:"p",size:"2"},["\u00bfNo tienes cuenta? ", (jsx(RadixThemesLink, ({asChild:true,css:({ ["color"] : "#7FFFD4", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}), (jsx(ReactRouterLink, ({to:"/register"}), "Reg\u00edstrate"))))])
  )
}


function Box_301922216310845308541465925070218255120 () {
  const { resolvedColorMode } = useContext(ColorModeContext)
const ref_email = useRef(null); refs["ref_email"] = ref_email;
const ref_password = useRef(null); refs["ref_password"] = ref_password;



  return (
    jsx(RadixThemesBox,{css:({ ["background"] : ((resolvedColorMode === "light") ? "white" : "#0f172a"), ["padding"] : "28px", ["borderRadius"] : "18px", ["boxShadow"] : "0 10px 35px rgba(0,0,0,.15)", ["width"] : "420px" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"4"},jsx("img",{css:({ ["width"] : "48px", ["height"] : "48px", ["borderRadius"] : "12px" }),src:"/favicon.ico"},),jsx(RadixThemesHeading,{size:"8",weight:"bold"},"Iniciar sesi\u00f3n"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray" }),size:"3"},"Bienvenido. Ingresa tus credenciales para continuar."),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",size:"3",weight:"medium"},"Usuario o Email"),jsx(RadixThemesTextField.Root,{css:({ ["autocomplete"] : "off", ["width"] : "100%" }),id:"email",placeholder:"Ingresa tu nombre de usuario o correo institucional",ref:ref_email,size:"3",type:"email"},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",size:"3",weight:"medium"},"Contrase\u00f1a"),jsx(RadixThemesTextField.Root,{css:({ ["width"] : "100%" }),id:"password",placeholder:"Ingresa tu contrase\u00f1a",ref:ref_password,size:"3",type:"password"},)),jsx(Button_269820399508177195096886202354013961597,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesText,{as:"label",size:"2"},jsx(RadixThemesFlex,{gap:"2"},jsx(RadixThemesCheckbox,{size:"2"},),"Recordarme")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"#"},"\u00bfOlvidaste tu contrase\u00f1a?"))),jsx(Text_252062685252430353538893593861073303399,{},)))
  )
}


function Button_269820399508177195096886202354013961597 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_56db85ba1acf7360c1af2f27de1c247b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.proyecto_reflex_v2___pages___login____login_page_state.handle_login", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"blue",css:({ ["width"] : "100%" }),onClick:on_click_56db85ba1acf7360c1af2f27de1c247b,size:"3"},"Entrar")
  )
}


function Fragment_144910753018416284489723083448110367524 () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    jsx(Fragment,{},((resolvedColorMode === "light")?(jsx(Fragment,{},jsx(LucideSun,{},))):(jsx(Fragment,{},jsx(LucideMoon,{},)))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["background"] : "linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)", ["minHeight"] : "100vh", ["padding"] : "24px" })},jsx(Iconbutton_108272057603238308839097621540397971161,{},),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["minHeight"] : "100vh" })},jsx(Box_301922216310845308541465925070218255120,{},))),jsx("title",{},"Login"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}
import {Fragment,useCallback,useContext,useEffect} from "react"
import {AlertDialog as RadixThemesAlertDialog,Box as RadixThemesBox,Button as RadixThemesButton,Flex as RadixThemesFlex,Heading as RadixThemesHeading,Link as RadixThemesLink,Select as RadixThemesSelect,Text as RadixThemesText,TextField as RadixThemesTextField} from "@radix-ui/themes"
import {ColorModeContext,EventLoopContext,StateContexts} from "$/utils/context"
import DebounceInput from "react-debounce-input"
import {ReflexEvent,isNotNullOrUndefined} from "$/utils/state"
import {Link as ReactRouterLink} from "react-router"
import {jsx} from "@emotion/react"




function Alertdialog__root_227845074888093069031151602947318032457 () {
  const reflex___state____state__proyecto_reflex_v2___pages___register____register_state = useContext(StateContexts.reflex___state____state__proyecto_reflex_v2___pages___register____register_state)



  return (
    jsx(RadixThemesAlertDialog.Root,{open:reflex___state____state__proyecto_reflex_v2___pages___register____register_state.show_success_rx_state_},jsx(RadixThemesAlertDialog.Content,{},jsx(RadixThemesAlertDialog.Title,{},"Usuario registrado correctamente"),jsx(RadixThemesAlertDialog.Description,{},"Su cuenta ha sido creada exitosamente."),jsx(RadixThemesFlex,{css:({ ["marginTop"] : "16px" }),justify:"end",gap:"3"},jsx(RadixThemesAlertDialog.Cancel,{},jsx(RadixThemesFlex,{},jsx(Button_79988956644240127492467265991345774085,{},))))))
  )
}


function Select__root_137094499477897398135436243203236671541 () {
  const reflex___state____state__proyecto_reflex_v2___pages___register____register_state = useContext(StateContexts.reflex___state____state__proyecto_reflex_v2___pages___register____register_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_a59f5533a501cb4c2f26fb9420244409 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.proyecto_reflex_v2___pages___register____register_state.set_career_name", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesSelect.Root,{onValueChange:on_change_a59f5533a501cb4c2f26fb9420244409,size:"3",value:reflex___state____state__proyecto_reflex_v2___pages___register____register_state.career_name_rx_state_},jsx(RadixThemesSelect.Trigger,{css:({ ["width"] : "100%" }),placeholder:"Selecciona tu carrera"},),jsx(RadixThemesSelect.Content,{},jsx(RadixThemesSelect.Group,{},"",jsx(RadixThemesSelect.Item,{value:"Ingenier\u00eda Inform\u00e1tica"},"Ingenier\u00eda Inform\u00e1tica"),jsx(RadixThemesSelect.Item,{value:"Licenciatura en Inform\u00e1tica"},"Licenciatura en Inform\u00e1tica"),jsx(RadixThemesSelect.Item,{value:"Otra"},"Otra"))))
  )
}


function Debounceinput_268552418183914583738236435665262479980 () {
  const reflex___state____state__proyecto_reflex_v2___pages___register____register_state = useContext(StateContexts.reflex___state____state__proyecto_reflex_v2___pages___register____register_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_4ee6a0ab42a24889b1e32a88a65706b9 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.proyecto_reflex_v2___pages___register____register_state.set_full_name", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "100%" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_4ee6a0ab42a24889b1e32a88a65706b9,placeholder:"Ej. Juan P\u00e9rez",size:"3",value:(isNotNullOrUndefined(reflex___state____state__proyecto_reflex_v2___pages___register____register_state.full_name_rx_state_) ? reflex___state____state__proyecto_reflex_v2___pages___register____register_state.full_name_rx_state_ : "")},)
  )
}


function Box_291916827584091463787932393288626052475 () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    jsx(RadixThemesBox,{css:({ ["background"] : ((resolvedColorMode === "light") ? "white" : "#0f172a"), ["padding"] : "28px", ["borderRadius"] : "18px", ["boxShadow"] : "0 10px 35px rgba(0,0,0,.15)", ["width"] : "420px" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"4"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesHeading,{size:"7",weight:"bold"},"Registro de Estudiante")),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray" }),size:"3"},"Completa el formulario para crear tu cuenta."),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",size:"3",weight:"medium"},"Nombre y Apellido"),jsx(Debounceinput_268552418183914583738236435665262479980,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",size:"3",weight:"medium"},"Correo institucional o personal"),jsx(Debounceinput_226665579053224343005019670331432133707,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",size:"3",weight:"medium"},"Nombre de Usuario"),jsx(Debounceinput_203228600771171463403728471859233987470,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",size:"3",weight:"medium"},"Contrase\u00f1a"),jsx(Debounceinput_277173406319129594931343631181448993671,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",size:"3",weight:"medium"},"Confirmar Contrase\u00f1a"),jsx(Debounceinput_76469842874121540084113022843270699624,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",size:"3",weight:"medium"},"Facultad / Carrera"),jsx(Select__root_137094499477897398135436243203236671541,{},)),jsx(Button_266300667458795000695495534910625597277,{},),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "blue", ["align"] : "center", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/login"},"\u00bfYa tienes cuenta? Inicia sesi\u00f3n"))))
  )
}


function Debounceinput_76469842874121540084113022843270699624 () {
  const reflex___state____state__proyecto_reflex_v2___pages___register____register_state = useContext(StateContexts.reflex___state____state__proyecto_reflex_v2___pages___register____register_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_c25d21ae2fe1c24ccba733b12eedc862 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.proyecto_reflex_v2___pages___register____register_state.set_confirm_password", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "100%" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_c25d21ae2fe1c24ccba733b12eedc862,placeholder:"Confirma tu contrase\u00f1a",size:"3",type:"password",value:(isNotNullOrUndefined(reflex___state____state__proyecto_reflex_v2___pages___register____register_state.confirm_password_rx_state_) ? reflex___state____state__proyecto_reflex_v2___pages___register____register_state.confirm_password_rx_state_ : "")},)
  )
}


function Debounceinput_203228600771171463403728471859233987470 () {
  const reflex___state____state__proyecto_reflex_v2___pages___register____register_state = useContext(StateContexts.reflex___state____state__proyecto_reflex_v2___pages___register____register_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_7b7b8f9cbc9949d925b4d1fd2ef1d573 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.proyecto_reflex_v2___pages___register____register_state.set_username", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "100%" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_7b7b8f9cbc9949d925b4d1fd2ef1d573,placeholder:"Crea tu nombre de usuario",size:"3",value:(isNotNullOrUndefined(reflex___state____state__proyecto_reflex_v2___pages___register____register_state.username_rx_state_) ? reflex___state____state__proyecto_reflex_v2___pages___register____register_state.username_rx_state_ : "")},)
  )
}


function Button_79988956644240127492467265991345774085 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_c326a7195e55fff2ca6943549653963e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.proyecto_reflex_v2___pages___register____register_state.redirect_login", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{onClick:on_click_c326a7195e55fff2ca6943549653963e},"Aceptar")
  )
}


function Debounceinput_277173406319129594931343631181448993671 () {
  const reflex___state____state__proyecto_reflex_v2___pages___register____register_state = useContext(StateContexts.reflex___state____state__proyecto_reflex_v2___pages___register____register_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_c0f20de718dd6faf36ed424303b95840 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.proyecto_reflex_v2___pages___register____register_state.set_password", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "100%" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_c0f20de718dd6faf36ed424303b95840,placeholder:"Crea tu contrase\u00f1a",size:"3",type:"password",value:(isNotNullOrUndefined(reflex___state____state__proyecto_reflex_v2___pages___register____register_state.password_rx_state_) ? reflex___state____state__proyecto_reflex_v2___pages___register____register_state.password_rx_state_ : "")},)
  )
}


function Button_266300667458795000695495534910625597277 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_9ada282a18eeaca1dd86373002546497 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.proyecto_reflex_v2___pages___register____register_state.register_user", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"green",css:({ ["width"] : "100%" }),onClick:on_click_9ada282a18eeaca1dd86373002546497,size:"3"},"Registrarme")
  )
}


function Debounceinput_226665579053224343005019670331432133707 () {
  const reflex___state____state__proyecto_reflex_v2___pages___register____register_state = useContext(StateContexts.reflex___state____state__proyecto_reflex_v2___pages___register____register_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_e80db0bf8a06dde2487af994dcab9548 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.proyecto_reflex_v2___pages___register____register_state.set_email", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "100%" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_e80db0bf8a06dde2487af994dcab9548,placeholder:"Ej. juan.perez@up.ac.pa",size:"3",type:"email",value:(isNotNullOrUndefined(reflex___state____state__proyecto_reflex_v2___pages___register____register_state.email_rx_state_) ? reflex___state____state__proyecto_reflex_v2___pages___register____register_state.email_rx_state_ : "")},)
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["minHeight"] : "100vh", ["background"] : "linear-gradient(135deg, #22d3ee 0%, #6366f1 100%)", ["padding"] : "24px" })},jsx(Box_291916827584091463787932393288626052475,{},),jsx(Alertdialog__root_227845074888093069031151602947318032457,{},)),jsx("title",{},"Registro"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}
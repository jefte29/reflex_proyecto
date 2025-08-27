import {Fragment,useCallback,useContext,useEffect} from "react"
import {Box as RadixThemesBox,Button as RadixThemesButton,Flex as RadixThemesFlex,Select as RadixThemesSelect,Separator as RadixThemesSeparator,Text as RadixThemesText,TextField as RadixThemesTextField} from "@radix-ui/themes"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,isNotNullOrUndefined} from "$/utils/state"
import DebounceInput from "react-debounce-input"
import {jsx} from "@emotion/react"




function Button_208868458902083527991072394342406385356 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_6d147e68892712da5b04eda128a86f3b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.proyecto_reflex_v2___pages___event_manager____event_state.export_csv", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"gray",onClick:on_click_6d147e68892712da5b04eda128a86f3b,size:"2"},"Exportar a CSV")
  )
}


function Flex_38962624786766145277234799563833061546 () {
  const reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state = useContext(StateContexts.reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state)



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["flexGrow"] : "1" }),direction:"column",gap:"4"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold" }),size:"4"},"Eventos disponibles"),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Text_324346875508593276128091196452902620863,{},)),reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state.filtered_events_rx_state_.map((event_rx_state_,index_6d79443dd1676c6c)=>(jsx(RadixThemesBox,{css:({ ["padding"] : "16px", ["border"] : "1px solid #d1d5db", ["borderRadius"] : "24px", ["boxShadow"] : "md", ["width"] : "100%", ["backgroundColor"] : "white" }),key:index_6d79443dd1676c6c},jsx(RadixThemesFlex,{css:({ ["alignItems"] : "center" }),gap:"4"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "48px", ["height"] : "48px", ["backgroundColor"] : ((event_rx_state_["status"] === "registered") ? "rgb(34, 197, 94)" : ((event_rx_state_["status"] === "full") ? "rgb(156, 163, 175)" : "rgb(59, 130, 246)")), ["borderRadius"] : "12px", ["boxShadow"] : "sm" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white", ["fontWeight"] : "bold" }),size:"4"},event_rx_state_["initial"])),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start", ["flexGrow"] : "1" }),direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold" }),size:"4"},event_rx_state_["title"]),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray" }),size:"2"},event_rx_state_["speaker"]),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray" }),size:"2"},(event_rx_state_["date"]+" "+event_rx_state_["time"]))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"4"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray" }),size:"2"},(event_rx_state_["registered"]+"/"+event_rx_state_["capacity"])),jsx(RadixThemesButton,{color:((event_rx_state_["status"] === "registered") ? "green" : ((event_rx_state_["status"] === "full") ? "gray" : "blue")),css:({ ["width"] : "120px", ["isDisabled"] : ((event_rx_state_["status"] === "full") ? true : false) }),size:"2"},((event_rx_state_["status"] === "registered") ? "Inscrito" : ((event_rx_state_["status"] === "full") ? "Lleno" : "Inscribirse")))))))))
  )
}


function Text_301582817962563795555500387994084732009 () {
  const reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state = useContext(StateContexts.reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state)



  return (
    jsx(RadixThemesText,{as:"p",size:"2"},("Total inscritos: "+reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state.total_registered_rx_state_))
  )
}


function Select__root_233705060751241069594234044321676718462 () {
  const reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state = useContext(StateContexts.reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_e0d30fd4552ddd1903724ed64eedd0ff = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.proyecto_reflex_v2___pages___event_manager____event_state.set_filter_status", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesSelect.Root,{onValueChange:on_change_e0d30fd4552ddd1903724ed64eedd0ff,value:reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state.filter_status_rx_state_},jsx(RadixThemesSelect.Trigger,{},),jsx(RadixThemesSelect.Content,{},jsx(RadixThemesSelect.Group,{},"",jsx(RadixThemesSelect.Item,{value:"Todos"},"Todos"),jsx(RadixThemesSelect.Item,{value:"available"},"available"),jsx(RadixThemesSelect.Item,{value:"full"},"full"),jsx(RadixThemesSelect.Item,{value:"registered"},"registered"))))
  )
}


function Text_324346875508593276128091196452902620863 () {
  const reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state = useContext(StateContexts.reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray" }),size:"2"},reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state.filtered_events_rx_state_.length)
  )
}


function Select__root_164806053769341256939821457857765680549 () {
  const reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state = useContext(StateContexts.reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_0b74a192ee10c090549db8469d9aacff = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.proyecto_reflex_v2___pages___event_manager____event_state.set_filter_type", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesSelect.Root,{onValueChange:on_change_0b74a192ee10c090549db8469d9aacff,value:reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state.filter_type_rx_state_},jsx(RadixThemesSelect.Trigger,{},),jsx(RadixThemesSelect.Content,{},jsx(RadixThemesSelect.Group,{},"",jsx(RadixThemesSelect.Item,{value:"Todos"},"Todos"),jsx(RadixThemesSelect.Item,{value:"Taller"},"Taller"),jsx(RadixThemesSelect.Item,{value:"Seminario"},"Seminario"),jsx(RadixThemesSelect.Item,{value:"Conferencia"},"Conferencia"),jsx(RadixThemesSelect.Item,{value:"Hackat\u00f3n"},"Hackat\u00f3n"))))
  )
}


function Debounceinput_166468549523102069561130235075731772020 () {
  const reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state = useContext(StateContexts.reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_886b535061cb73cfd97c20ee30cea7e7 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.proyecto_reflex_v2___pages___event_manager____event_state.set_search_query", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_886b535061cb73cfd97c20ee30cea7e7,placeholder:"Buscar por t\u00edtulo...",value:(isNotNullOrUndefined(reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state.search_query_rx_state_) ? reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state.search_query_rx_state_ : "")},)
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["maxWidth"] : "1280px", ["backgroundColor"] : "#e6f7ff", ["minHeight"] : "100vh" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["padding"] : "2em", ["alignItems"] : "start" }),direction:"column",gap:"8"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"1"},jsx(RadixThemesText,{align:"center",as:"p",size:"5",weight:"bold"},"Gestor de Eventos Acad\u00e9micos"),jsx(RadixThemesText,{align:"center",as:"p",css:({ ["color"] : "gray" }),size:"3"},"Universidad de Panam\u00e1"),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px", ["marginTop"] : "2", ["marginBottom"] : "4" }),size:"4"},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["alignItems"] : "start" }),direction:"row",gap:"8"},jsx(RadixThemesBox,{css:({ ["width"] : "320px", ["backgroundColor"] : "white", ["padding"] : "24px", ["borderRadius"] : "18px", ["boxShadow"] : "sm", ["flexShrink"] : "0" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start" }),direction:"column",gap:"4"},jsx(RadixThemesBox,{css:({ ["paddingBottom"] : "1em" })},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold" }),size:"4"},"Perfil"),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px" }),size:"4"},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold" }),size:"3"},"Juan P\u00e9rez"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray" }),size:"2"},"juan.perez@uni.edu.pa"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray" }),size:"2"},"Ingenier\u00eda en Sistemas")),jsx(RadixThemesButton,{color:"blue",css:({ ["width"] : "100%" }),size:"2"},"Editar perfil"),jsx(RadixThemesBox,{css:({ ["paddingTop"] : "1em", ["spacing"] : "2" })},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold" }),size:"4"},"Filtros"),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray", ["borderWidth"] : "1px" }),size:"4"},),jsx(Select__root_164806053769341256939821457857765680549,{},),jsx(Select__root_233705060751241069594234044321676718462,{},),jsx(Debounceinput_166468549523102069561130235075731772020,{},)),jsx(RadixThemesBox,{css:({ ["paddingTop"] : "1em" })},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold" }),size:"4"},"Mis eventos"),jsx(Text_301582817962563795555500387994084732009,{},),jsx(Button_208868458902083527991072394342406385356,{},)))),jsx(Flex_38962624786766145277234799563833061546,{},)))),jsx("title",{},"Gestor de Eventos"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}
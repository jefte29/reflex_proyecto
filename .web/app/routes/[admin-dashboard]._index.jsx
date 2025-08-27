import {Fragment,useEffect} from "react"
import {Box as RadixThemesBox,Button as RadixThemesButton,Flex as RadixThemesFlex,Select as RadixThemesSelect,Text as RadixThemesText,TextField as RadixThemesTextField} from "@radix-ui/themes"
import {jsx} from "@emotion/react"





export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"0"},jsx(RadixThemesBox,{css:({ ["background"] : "white", ["paddingInlineStart"] : "6", ["paddingInlineEnd"] : "6", ["paddingTop"] : "4", ["paddingBottom"] : "4", ["boxShadow"] : "sm", ["width"] : "100%", ["position"] : "sticky", ["top"] : "0", ["zIndex"] : "50" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",justify:"between",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black" }),size:"5",weight:"bold"},"Gestor de Eventos Acad\u00e9micos \u2014 Mockup"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray" }),size:"3"},"Sesi\u00f3n: Juan P\u00e9rez \u2014 Administrador"))),jsx(RadixThemesBox,{css:({ ["background"] : "#f9fafb", ["padding"] : "8", ["marginInlineStart"] : "auto", ["marginInlineEnd"] : "auto", ["marginTop"] : "6", ["marginBottom"] : "6", ["borderRadius"] : "lg", ["maxWidth"] : "1200px" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start", ["width"] : "100%" }),direction:"row",gap:"6"},jsx(RadixThemesBox,{css:({ ["background"] : "white", ["padding"] : "6", ["borderRadius"] : "lg", ["boxShadow"] : "md", ["width"] : "100%", ["maxWidth"] : "350px" })},jsx(RadixThemesFlex,{align:"stretch",className:"rx-Stack",direction:"column",gap:"4"},jsx(RadixThemesText,{as:"p",css:({ ["marginBottom"] : "4" }),size:"4",weight:"bold"},"Crear evento"),jsx(RadixThemesTextField.Root,{css:({ ["width"] : "100%" }),placeholder:"Nombre del evento"},),jsx(RadixThemesSelect.Root,{},jsx(RadixThemesSelect.Trigger,{css:({ ["width"] : "100%" }),placeholder:"Tipo de evento"},),jsx(RadixThemesSelect.Content,{},jsx(RadixThemesSelect.Group,{},"",jsx(RadixThemesSelect.Item,{value:"Taller"},"Taller"),jsx(RadixThemesSelect.Item,{value:"Seminario"},"Seminario"),jsx(RadixThemesSelect.Item,{value:"Hackat\u00f3n"},"Hackat\u00f3n"),jsx(RadixThemesSelect.Item,{value:"Conferencia"},"Conferencia")))),jsx(RadixThemesTextField.Root,{css:({ ["width"] : "100%" }),placeholder:"YYYY-MM-DD HH:MM"},),jsx(RadixThemesTextField.Root,{css:({ ["width"] : "100%" }),placeholder:"Ponente"},),jsx(RadixThemesTextField.Root,{css:({ ["width"] : "100%" }),placeholder:"Capacidad"},),jsx(RadixThemesButton,{css:({ ["background"] : "#6d28d9", ["color"] : "white", ["borderRadius"] : "md", ["paddingInlineStart"] : "6", ["paddingInlineEnd"] : "6", ["paddingTop"] : "3", ["paddingBottom"] : "3", ["width"] : "100%", ["&:hover"] : ({ ["background"] : "#5b21b6" }) })},"Crear"))),jsx(RadixThemesBox,{css:({ ["padding"] : "6", ["flex"] : "1", ["background"] : "white", ["borderRadius"] : "lg", ["boxShadow"] : "sm" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black" })},"Aqu\u00ed ir\u00e1 la tabla de eventos o vista principal"))))),jsx("title",{},"Panel de Administraci\u00f3n"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}
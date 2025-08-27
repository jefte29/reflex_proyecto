import { createContext, useContext, useMemo, useReducer, useState, createElement, useEffect } from "react"
import { applyDelta, ReflexEvent, hydrateClientStorage, useEventLoop, refs } from "$/utils/state"
import { jsx } from "@emotion/react";

export const initialState = {"reflex___state____state": {"is_hydrated_rx_state_": false, "router_rx_state_": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "cookie": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": "", "raw_headers": {}}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}, "url": "", "route_id": ""}}, "reflex___state____state.proyecto_reflex_v2___pages___event_manager____event_state": {"events_rx_state_": [{"initial": "T", "title": "Taller de IA", "speaker": "Dr. García", "date": "10/09/2025", "time": "10:00 AM", "type": "Taller", "status": "available", "registered": 15, "capacity": 30}, {"initial": "S", "title": "Seminario de Ciberseguridad", "speaker": "Ing. López", "date": "12/09/2025", "time": "2:00 PM", "type": "Seminario", "status": "full", "registered": 50, "capacity": 50}, {"initial": "C", "title": "Conferencia sobre Big Data", "speaker": "M.Sc. Ruiz", "date": "15/09/2025", "time": "9:00 AM", "type": "Conferencia", "status": "available", "registered": 10, "capacity": 100}, {"initial": "H", "title": "Hackatón Universitario", "speaker": "Comité UP", "date": "20/09/2025", "time": "8:00 AM", "type": "Hackatón", "status": "registered", "registered": 5, "capacity": 50}], "filter_status_rx_state_": "Todos", "filter_type_rx_state_": "Todos", "filtered_events_rx_state_": [{"initial": "T", "title": "Taller de IA", "speaker": "Dr. García", "date": "10/09/2025", "time": "10:00 AM", "type": "Taller", "status": "available", "registered": 15, "capacity": 30}, {"initial": "S", "title": "Seminario de Ciberseguridad", "speaker": "Ing. López", "date": "12/09/2025", "time": "2:00 PM", "type": "Seminario", "status": "full", "registered": 50, "capacity": 50}, {"initial": "C", "title": "Conferencia sobre Big Data", "speaker": "M.Sc. Ruiz", "date": "15/09/2025", "time": "9:00 AM", "type": "Conferencia", "status": "available", "registered": 10, "capacity": 100}, {"initial": "H", "title": "Hackatón Universitario", "speaker": "Comité UP", "date": "20/09/2025", "time": "8:00 AM", "type": "Hackatón", "status": "registered", "registered": 5, "capacity": 50}], "search_query_rx_state_": "", "total_registered_rx_state_": 1}, "reflex___state____state.proyecto_reflex_v2___pages___login____login_page_state": {}, "reflex___state____state.proyecto_reflex_v2___pages___register____register_state": {"career_name_rx_state_": "", "confirm_password_rx_state_": "", "email_rx_state_": "", "full_name_rx_state_": "", "password_rx_state_": "", "show_success_rx_state_": false, "username_rx_state_": ""}, "reflex___state____state.proyecto_reflex_v2___proyecto_reflex_v2____state": {}, "reflex___state____state.reflex___state____frontend_event_exception_state": {}, "reflex___state____state.reflex___state____on_load_internal_state": {}, "reflex___state____state.reflex___state____update_vars_internal_state": {}}

export const defaultColorMode = "system"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {reflex___state____state: createContext(null),reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state: createContext(null),reflex___state____state__proyecto_reflex_v2___pages___login____login_page_state: createContext(null),reflex___state____state__proyecto_reflex_v2___pages___register____register_state: createContext(null),reflex___state____state__proyecto_reflex_v2___proyecto_reflex_v2____state: createContext(null),reflex___state____state__reflex___state____frontend_event_exception_state: createContext(null),reflex___state____state__reflex___state____on_load_internal_state: createContext(null),reflex___state____state__reflex___state____update_vars_internal_state: createContext(null),};
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}, "session_storage": {}}


export const state_name = "reflex___state____state"

export const exception_state_name = "reflex___state____state.reflex___state____frontend_event_exception_state"

// These events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            ReflexEvent(
                'reflex___state____state.reflex___state____update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(ReflexEvent('reflex___state____state.reflex___state____on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
export const initialEvents = () => [
    ReflexEvent('reflex___state____state.hydrate'),
    ...onLoadInternalEvent()
]
    

export const isDevMode = true;

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return createElement(
    UploadFilesContext.Provider,
    { value: [filesById, setFilesById] },
    children
  );
}

export function ClientSide(component) {
  return ({ children, ...props }) => {
    const [Component, setComponent] = useState(null);
    useEffect(() => {
      setComponent(component);
    }, []);
    return Component ? jsx(Component, props, children) : null;
  };
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return createElement(
    EventLoopContext.Provider,
    { value: [addEvents, connectErrors] },
    children
  );
}

export function StateProvider({ children }) {
  const [reflex___state____state, dispatch_reflex___state____state] = useReducer(applyDelta, initialState["reflex___state____state"])
const [reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state, dispatch_reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state] = useReducer(applyDelta, initialState["reflex___state____state.proyecto_reflex_v2___pages___event_manager____event_state"])
const [reflex___state____state__proyecto_reflex_v2___pages___login____login_page_state, dispatch_reflex___state____state__proyecto_reflex_v2___pages___login____login_page_state] = useReducer(applyDelta, initialState["reflex___state____state.proyecto_reflex_v2___pages___login____login_page_state"])
const [reflex___state____state__proyecto_reflex_v2___pages___register____register_state, dispatch_reflex___state____state__proyecto_reflex_v2___pages___register____register_state] = useReducer(applyDelta, initialState["reflex___state____state.proyecto_reflex_v2___pages___register____register_state"])
const [reflex___state____state__proyecto_reflex_v2___proyecto_reflex_v2____state, dispatch_reflex___state____state__proyecto_reflex_v2___proyecto_reflex_v2____state] = useReducer(applyDelta, initialState["reflex___state____state.proyecto_reflex_v2___proyecto_reflex_v2____state"])
const [reflex___state____state__reflex___state____frontend_event_exception_state, dispatch_reflex___state____state__reflex___state____frontend_event_exception_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____frontend_event_exception_state"])
const [reflex___state____state__reflex___state____on_load_internal_state, dispatch_reflex___state____state__reflex___state____on_load_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____on_load_internal_state"])
const [reflex___state____state__reflex___state____update_vars_internal_state, dispatch_reflex___state____state__reflex___state____update_vars_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____update_vars_internal_state"])
  const dispatchers = useMemo(() => {
    return {
      "reflex___state____state": dispatch_reflex___state____state,
"reflex___state____state.proyecto_reflex_v2___pages___event_manager____event_state": dispatch_reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state,
"reflex___state____state.proyecto_reflex_v2___pages___login____login_page_state": dispatch_reflex___state____state__proyecto_reflex_v2___pages___login____login_page_state,
"reflex___state____state.proyecto_reflex_v2___pages___register____register_state": dispatch_reflex___state____state__proyecto_reflex_v2___pages___register____register_state,
"reflex___state____state.proyecto_reflex_v2___proyecto_reflex_v2____state": dispatch_reflex___state____state__proyecto_reflex_v2___proyecto_reflex_v2____state,
"reflex___state____state.reflex___state____frontend_event_exception_state": dispatch_reflex___state____state__reflex___state____frontend_event_exception_state,
"reflex___state____state.reflex___state____on_load_internal_state": dispatch_reflex___state____state__reflex___state____on_load_internal_state,
"reflex___state____state.reflex___state____update_vars_internal_state": dispatch_reflex___state____state__reflex___state____update_vars_internal_state,
    }
  }, [])

  return (
    createElement(StateContexts.reflex___state____state,{value: reflex___state____state},
createElement(StateContexts.reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state,{value: reflex___state____state__proyecto_reflex_v2___pages___event_manager____event_state},
createElement(StateContexts.reflex___state____state__proyecto_reflex_v2___pages___login____login_page_state,{value: reflex___state____state__proyecto_reflex_v2___pages___login____login_page_state},
createElement(StateContexts.reflex___state____state__proyecto_reflex_v2___pages___register____register_state,{value: reflex___state____state__proyecto_reflex_v2___pages___register____register_state},
createElement(StateContexts.reflex___state____state__proyecto_reflex_v2___proyecto_reflex_v2____state,{value: reflex___state____state__proyecto_reflex_v2___proyecto_reflex_v2____state},
createElement(StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state,{value: reflex___state____state__reflex___state____frontend_event_exception_state},
createElement(StateContexts.reflex___state____state__reflex___state____on_load_internal_state,{value: reflex___state____state__reflex___state____on_load_internal_state},
createElement(StateContexts.reflex___state____state__reflex___state____update_vars_internal_state,{value: reflex___state____state__reflex___state____update_vars_internal_state},
    createElement(DispatchContext, {value: dispatchers}, children)
    ))))))))
  )
}
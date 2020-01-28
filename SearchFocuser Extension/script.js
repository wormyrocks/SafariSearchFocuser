document.addEventListener("DOMContentLoaded", function (event) {
    function get_selection_url() {
        sel = document.getSelection()
        if (sel == null || sel.isCollapsed)
            return
        var fn = sel.focusNode
        if (fn != null) {
            var parentel = fn.parentElement
            while (parentel != null && parentel.href === undefined) {
                parentel = parentel.parentElement
            }
            if (parentel) {
                parentel.focus()
            }
        }
    }
    document.onselectionchange = () => { get_selection_url() }
})

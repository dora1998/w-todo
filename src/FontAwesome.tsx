import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default {
  init: () => {
    library.add(faTrashAlt, faEdit)
  }
}

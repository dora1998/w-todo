import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default {
  init: () => {
    library.add(faTrashAlt, faEdit, faCheck)
  }
}

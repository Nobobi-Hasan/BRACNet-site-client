import { useRouter } from "vue-router";
import axios from "axios";
import Data from "../../Data/Data";


var AppService = {
    layoutGenerator() {
        const router = useRouter();
        
        if (router.currentRoute.value.name == 'Login' ) {
            return "UnauthenticatedLayout"
        }

        else {
            let user = JSON.parse(localStorage.getItem("user"))
            if (user) {
                return "AdminLayout"
                
            } else {
                return "UnauthenticatedLayout"
            }
        }
    },

    setAxiosToken: () => {
        let user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
        }
    },
}

export default AppService
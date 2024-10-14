import { useRouter } from 'vue-router';
import {fetchD} from '../composable/fetchData.js';
const router= useRouter()
export async function decon(){
    try {
        const data = await fetchD({}, `logout`,"POST");
        if(data.status==='success'){
            console.log(data.data)
            router.push(`/`)
        }else{
            console.log(data.message)
            stateError.value=data.message
        }
    
    } catch (error) {
        console.error('Erreur lors de la soumission du formulaire:', error.message);
    }
}
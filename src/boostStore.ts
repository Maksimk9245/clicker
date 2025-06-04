import { ref } from 'vue'

export const boostActive = ref(false)

export function activateBoost(duration = 5000) {
    boostActive.value = true

    setTimeout(() => {
        boostActive.value = false
    }, duration)
}

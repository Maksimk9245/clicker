import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useScoreStore = defineStore('score', () => {
    const score = ref(0)

    function loadFromLocalStorage() {
        const saved = localStorage.getItem('clickScore')
        score.value = Number.isFinite(+saved) ? +saved : 0
    }

    function add(points: number) {
        score.value += points
        localStorage.setItem('clickScore', JSON.stringify(score.value))
    }

    return { score, add, loadFromLocalStorage }
})

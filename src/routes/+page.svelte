<script lang="ts">
    import Services from '$lib/components/Services.svelte';
    import Gallery from '$lib/components/Gallery.svelte';
    import Contact from '$lib/components/Contact.svelte';
    import { fly, fade } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
</script>

<section class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <video 
            src="/hero.mp4" 
            autoplay 
            loop 
            muted 
            playsinline
            class="w-full h-full object-cover"
        >
        </video>
        
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
    </div>

    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto mt-[-50px]">
        <h1 
            class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
            in:fly={{ y: -50, duration: 1000, easing: cubicOut, delay: 200 }}
        >
            <span class="text-forge-orange inline-block">ARTE</span> EN HIERRO <br />
            
        </h1>
        
        <p 
            class="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light drop-shadow-md"
            in:fly={{ y: 30, duration: 1000, delay: 600 }}
        >
            Tradición y maestría artesanal desde hace más de 10 años. Cada pieza cuenta una historia de pasión y dedicación.
        </p>

        <div 
            class="flex flex-col sm:flex-row gap-4 justify-center"
            in:fade={{ duration: 800, delay: 1000 }}
        >
            <a 
                href="#galeria"
                class="bg-forge-orange text-white px-10 py-4 rounded font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#ff4500] hover:shadow-[0_0_20px_rgba(255,107,0,0.6)] hover:scale-105 text-center"
            >
                Ver Catálogo
            </a>
            <a 
                href="#contacto"
                class="bg-black/40 border-2 border-white/30 text-white hover:bg-white hover:text-black px-10 py-4 rounded font-bold uppercase tracking-widest transition-all hover:scale-105 backdrop-blur-sm text-center"
            >
                Contactar
            </a>
        </div>
    </div>
</section>

<Services />
<Gallery />
<Contact />
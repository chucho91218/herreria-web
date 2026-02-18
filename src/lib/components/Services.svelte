<script lang="ts">
    import { Hammer, Ruler, Armchair, Truck } from 'lucide-svelte';
    import { reveal } from '$lib/actions/reveal';

    const services = [
        {
            title: 'Servicio integral de herrería.',
            desc: 'Fabricamos y montamos estructuras metálicas, rejas, barandas, escaleras y más. Desarrollamos proyectos a medida, combinando resistencia, seguridad y un acabado prolijo para cada espacio.',
            icon: Hammer 
        },
        {
            title: 'Diseño y fabricación a medida.',
            desc: 'Desarrollamos soluciones personalizadas según tu estilo y necesidades. Desde la idea inicial y el diseño hasta la construcción final, cada trabajo se realiza con atención al detalle.',
            icon: Ruler 
        },
        {
            title: 'Muebles industriales personalizados.',
            desc: 'Construimos mesas, escritorios, estanterías y más, combinando hierro y madera para lograr un diseño moderno, resistente y de larga duración.',
            icon: Armchair
        },
        {
            title: 'Entrega e instalación.',
            desc: 'Realizamos el traslado y la colocación de cada trabajo, asegurando una instalación precisa, firme y segura.',
            icon: Truck 
        }
    ];
</script>

<section id="servicios" class="py-20 bg-forge-black relative z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-16" use:reveal>
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                NUESTROS <span class="text-forge-orange">SERVICIOS</span>
            </h2>
            <p class="text-forge-muted max-w-2xl mx-auto text-lg">
                Contamos con diferentes servicios para cada necesidad.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {#each services as service, i}
                <div 
                    use:reveal={{ delay: i * 200 }} 
                    class="group bg-[#1a1a1a] border border-white/10 p-8 rounded-lg hover:border-forge-orange transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
                >
                    <div class="bg-white/5 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-forge-orange group-hover:text-white transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(255,107,0,0.5)]">
                        <svelte:component this={service.icon} class="w-7 h-7 text-forge-orange group-hover:text-white transition-colors" />
                    </div>

                    <h3 class="text-xl font-bold text-white mb-3 font-serif tracking-wide">
                        {service.title}
                    </h3>
                    <p class="text-forge-muted leading-relaxed text-sm">
                        {service.desc}
                    </p>
                </div>
            {/each}
        </div>

    </div>
</section>
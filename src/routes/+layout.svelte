<script lang="ts">
    import '../app.css';
    import WhatsAppFloating from '$lib/components/WhatsAppFloating.svelte';
    import { Instagram } from 'lucide-svelte';
</script>

<div class="flex flex-col min-h-screen">
    <header class="fixed w-full top-0 z-50 transition-all duration-300 bg-gradient-to-b from-black/90 to-transparent hover:bg-black/90">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-24"> 
                <a href="/" class="flex items-center group">
                    <img 
                        src="/logo.png" 
                        alt="Logo Forja Maestra" 
                        class="h-50 w-auto object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-110" 
                    />
                </a>

                <nav class="hidden md:flex items-center gap-6">
                    {#each ['INICIO', 'SERVICIOS', 'GALERIA', 'CONTACTO'] as item}
                        <a 
                            href="#{item.toLowerCase() === 'inicio' ? 'top' : item.toLowerCase()}" 
                            class="text-sm font-bold tracking-wider text-white hover:text-forge-orange transition-colors drop-shadow-md"
                        >
                            {item}
                        </a>
                    {/each}
                    <div class="h-6 w-px bg-white/20 mx-2"></div>
                    <a 
                        href="https://www.instagram.com/herreria_martinluque/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-white hover:text-[#E1306C] transition-all transform hover:scale-110"
                    >
                        <Instagram class="w-7 h-7" />
                    </a>
                </nav>
            </div>
        </div>
    </header>

    <main class="flex-grow pt-0">
        <slot />
    </main>
    
    <footer class="bg-forge-black border-t border-white/10 py-8 mt-auto">
        <div class="max-w-7xl mx-auto px-4 text-center text-forge-muted text-sm">
            <p>&copy; 2026 Herrería Martín Luque. Todos los derechos reservados.</p>
        </div>
    </footer>

    <WhatsAppFloating />
</div>
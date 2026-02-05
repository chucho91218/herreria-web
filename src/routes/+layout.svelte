<script lang="ts">
	import '../app.css';
	import { Hammer } from 'lucide-svelte';
</script>

<div class="flex flex-col min-h-screen">
	<header class="fixed w-full top-0 z-50 bg-forge-black/90 backdrop-blur-md border-b border-white/10">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-20">
				<div class="flex items-center gap-2">
					<Hammer class="w-8 h-8 text-forge-orange rotate-[-15deg]" />
					<span class="text-2xl font-bold tracking-wider text-white">FORJA MAESTRA</span>
				</div>

				<nav class="hidden md:flex space-x-8 items-center">
					<a href="/" class="text-sm font-medium text-gray-300 hover:text-forge-orange transition-colors">INICIO</a>
					<a href="#servicios" class="text-sm font-medium text-gray-300 hover:text-forge-orange transition-colors">SERVICIOS</a>
					<a href="#galeria" class="text-sm font-medium text-gray-300 hover:text-forge-orange transition-colors">GALERIA</a>
					<a href="#contacto" class="text-sm font-medium text-gray-300 hover:text-forge-orange transition-colors">CONTACTO</a>
					<button class="bg-forge-orange hover:bg-forge-orange-hover text-white px-6 py-2 rounded font-bold text-sm transition-transform hover:scale-105">
						Cotizar
					</button>
				</nav>
			</div>
		</div>
	</header>

	<main class="flex-grow pt-20"> <slot />
	</main>
    
    <footer class="bg-forge-black border-t border-white/10 py-8 mt-auto">
        <div class="max-w-7xl mx-auto px-4 text-center text-forge-muted text-sm">
            <p>&copy; 2024 Forja Maestra. Todos los derechos reservados.</p>
        </div>
    </footer>
</div>
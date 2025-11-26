import { cn } from "@/lib/utils";
import { CircleX, SearchIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export function Search() {
    // useRouter Permite:  
    // ler parâmetros da URL
    // navegar entre páginas
    // empurrar novas URLs
    const router = useRouter(); 
    
    // Pegando o parâmetro q da URL
    // Se a URL for: /blog?q=javascript
    // Então router.query.q vale "javascript"
    // Se for undefined ou null vai atribuir string vazia
    const query = (router.query.q as string ?? '');

    // // Criando estado interno para o input
    // // query → guarda o texto digitado
    // // setQuery() → atualiza o texto digitado
    // // Toda vez que o usuário digita, o estado é atualizado.
    // const [query, setQuery] = useState('');

    // useCallback() Evita recriar a função em todo render (otimização).
    const handleSearch = useCallback((event: React.FormEvent) => {
        // Impede o formulário de recarregar a página.
        event.preventDefault();

        // remove espaços no começo e fim.
        if(query.trim()){
            // Redireciona para nova URL
            // Exemplo Usuário digitou: "react hooks"
            // Vai para: /blog?q=react%20hooks
            router.push(`/blog?q=${encodeURIComponent(query)}`);
        }
    }, [query, router]);

    // busca em tempo real
    // Cada letra digitada ja é passada para url
    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = event.target.value;

        router.push(`/blog?q=${encodeURIComponent(newQuery)}`, undefined, {
            // shallor true faz com que
            //  não recarregue a página
            // não chame getServerSideProps novamente
            // não chame getStaticProps novamente
            // Isso deixa a busca mais leve e instantânea.
            shallow: true,

            // Impede a página de rolar para o topo quando a URL muda.
            scroll: false
        })
    }

    // useEffect(() => {
    //     setQuery(q)
    // }, [q])

    const resetSearch = () => {
        router.push('/blog', undefined,  {
            shallow: true,
            scroll: false
        })
    }

    return(
        // Quando o usuário pressiona Enter, chama handleSearch.
        <form onSubmit={handleSearch} className="relative group w-full md:w-60">
            {/* A função cn() junta classes. */}
            <SearchIcon className={cn('text-gray-300 absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors duration-200 group-focus-within:text-blue-300', query ? 'text-blue-300' : '')} />
            <input 
                type="text"
                placeholder="Buscar"
                value={query}
                onChange={handleQueryChange}
                className="w-full h-10 md:w-60 bg-transparent border border-gray-400 pl-9 text-gray-100 rounded-md text-body-sm outline-none transition-all duration-200 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300 placeholder:text-gray-300 placeholder:text-body-sm " 
            />
            {/* Caso possua valor o icone aparece */}
            {query && (
                <CircleX className="absolute w-4 h-4 top-1/2 -translate-y-1/2 right-3 text-gray-300 " onClick={resetSearch} />
            )}
            
        </form>
    )
}
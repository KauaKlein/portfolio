import { OnHeader } from "@/components/navbar";
// import { Simple } from "@/components/formfield";
import { Sitemap } from "@/components/footer";
import { Simple } from "@/components/carousel";

export default function Home() {
return(

    <>
    
    
    <section><OnHeader></OnHeader></section>

    <main><Simple></Simple><Simple></Simple></main>
    
    
    <footer><Sitemap></Sitemap></footer>
    </>
    
)
 
  
}

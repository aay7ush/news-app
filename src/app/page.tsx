import fetchNews from "@/utils/fetchNews"
import { categories } from "../../constants"
import NewsList from "@/components/NewsList"

async function Homepage() {
  const news: NewsResponse = await fetchNews(categories.join(","))

  return (
    <main>
      <NewsList news={news} />
    </main>
  )
}

export default Homepage

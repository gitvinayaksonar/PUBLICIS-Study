export default function BannerItem({bannerItem}) {
    return(
        <div>
            <img style = {{ width: '80%', height : 'auto', margin:' 0 auto'}} src={bannerItem.bannerImageUrl} alt={bannerItem.name} />
        </div>
    )
    
}
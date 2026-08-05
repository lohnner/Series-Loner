fetch('series-data.json?v=55')
  .then(response=>response.json())
  .then(series=>{
    document.getElementById('about-series-count').textContent=series.length;
    const channels=new Set(series.map(item=>item.channel||item.platform).filter(Boolean));
    document.getElementById('about-channel-count').textContent=channels.size;
  })
  .catch(()=>{});

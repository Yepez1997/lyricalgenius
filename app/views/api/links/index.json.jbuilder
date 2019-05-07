@links.each do |link|
    json.set! link.id do 
        json.id link.id 
        json.annotation link.annotation
    end 
end 


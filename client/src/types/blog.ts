export interface Blog {
  _id: string;                     
  id?: string;                   
  image?: string;                 
  title: string;                  
  blogCategoryRef?: string;  
  blogSubCategoryRef?: string;     
  details?: string;           
  youtubeUrl?: string;           
  facebookUrl?: string;           
  tags: string[];                 
  author: string;                  
  featured?: boolean;             
  status?: boolean;               
  createdAt: string;              
  updatedAt?: string;             
  slug: string;                    
  __v?: number;                    
}


class Api::CommentsController < ApplicationController

    def create 
    end

    def show 
    end

    def index 
    end

    def destroy 
    end


    def comment_params
        params.require(:comment).permit(:body)
    end
end

curl "http://tic-tac-toe.wdibos.com/sign-out/$ID" \
  --include \
  --header "Authorization: Token token =$TOKEN" \
  --request DELETE
  
echo

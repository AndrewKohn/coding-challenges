function friend(friends) {
  return friends.filter(friend => friend.length === 4);
}

console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"]);

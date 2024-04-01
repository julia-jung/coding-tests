/** ⭐⭐
 * A gene string can be represented by an 8-character long string, with choices from 'A', 'C', 'G', and 'T'.
 * Suppose we need to investigate a mutation from a gene string startGene to a gene string endGene 
 * where one mutation is defined as one single character changed in the gene string.
 * For example, "AACCGGTT" --> "AACCGGTA" is one mutation.
 * There is also a gene bank bank that records all the valid gene mutations. A gene must be in bank to make it a valid gene string.
 * Given the two gene strings startGene and endGene and the gene bank bank, 
 * return the minimum number of mutations needed to mutate from startGene to endGene. If there is no such a mutation, return -1.
 * Note that the starting point is assumed to be valid, so it might not be included in the bank.
 */

function minMutation(startGene: string, endGene: string, bank: string[]): number {
  if (startGene === endGene) return 0;
  if (bank.indexOf(endGene) < 0) return -1;

  const dist = new Map<string, number>(); // key: gene, value: num of mutation from start
  
  dist.set(startGene, 0); // start from startGene
  const queue: string[] = [startGene];
  
  while (queue.length) {
    const curGene = queue.shift();
    const curDist = dist.get(curGene);

    for (const gene of bank) {
      if (dist.has(gene)) continue;
      
      // for every characters, count diff between current gene and gene from the bank
      let diff = 0;
      for (let i = 0; i < 8; i++) {
        if (curGene[i] !== gene[i]) diff++;
      }

      // if we can make mutation to the gene, set the num of mutation as curGene's + 1
      if (diff === 1) {        
        if (gene === endGene) return curDist + 1;
        dist.set(gene, curDist + 1);
        queue.push(gene);
      }
    }
  }

  return -1;
};
package obligatorisk.obligatorisktre;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class BillettController {

    @Autowired
    private BillettRepository rep;


    @PostMapping("/lagreBillett")
    public void lagreBillett(Billett innBillett){
        rep.alleBillett(innBillett);
    }

    @GetMapping("/henteBillett")
    public List<Billett> hentAlle(){
        return rep.alleBillett;}

    @GetMapping("/slettBillett")
    public void slettAlle(){
        rep.slett();
    }
}
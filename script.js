const paragraphs = [
  {
    book: 'Book One',
    paragraph:
      'From my grandfather Verus I learned good morals and the government\nof my temper. ',
  },
  {
    book: 'Book One',
    paragraph:
      'From the reputation and remembrance of my father, modesty and a manly\ncharacter. ',
  },
  {
    book: 'Book One',
    paragraph:
      'From my mother, piety and beneficence, and abstinence, not only from\nevil deeds, but even from evil thoughts; and further, simplicity in\nmy way of living, far removed from the habits of the rich.',
  },
  {
    book: 'Book One',
    paragraph:
      'From my great-grandfather, not to have frequented public schools,\nand to have had good teachers at home, and to know that on such things\na man should spend liberally. ',
  },
  {
    book: 'Book One',
    paragraph:
      "From my governor, to be neither of the green nor of the blue party\nat the games in the Circus, nor a partizan either of the Parmularius\nor the Scutarius at the gladiators' fights; from him too I learned\nendurance of labour, and to want little, and to work with my own hands,\nand not to meddle with other people's affairs, and not to be ready\nto listen to slander. ",
  },
  {
    book: 'Book One',
    paragraph:
      'From Diognetus, not to busy myself about trifling things, and not\nto give credit to what was said by miracle-workers and jugglers about\nincantations and the driving away of daemons and such things; and\nnot to breed quails for fighting, nor to give myself up passionately\nto such things; and to endure freedom of speech; and to have become\nintimate with philosophy; and to have been a hearer, first of Bacchius,\nthen of Tandasis and Marcianus; and to have written dialogues in my\nyouth; and to have desired a plank bed and skin, and whatever else\nof the kind belongs to the Grecian discipline. ',
  },
  {
    book: 'Book One',
    paragraph:
      'From Rusticus I received the impression that my character required\nimprovement and discipline; and from him I learned not to be led astray\nto sophistic emulation, nor to writing on speculative matters, nor\nto delivering little hortatory orations, nor to showing myself off\nas a man who practises much discipline, or does benevolent acts in\norder to make a display; and to abstain from rhetoric, and poetry,\nand fine writing; and not to walk about in the house in my outdoor\ndress, nor to do other things of the kind; and to write my letters\nwith simplicity, like the letter which Rusticus wrote from Sinuessa\nto my mother; and with respect to those who have offended me by words,\nor done me wrong, to be easily disposed to be pacified and reconciled,\nas soon as they have shown a readiness to be reconciled; and to read\ncarefully, and not to be satisfied with a superficial understanding\nof a book; nor hastily to give my assent to those who talk overmuch;\nand I am indebted to him for being acquainted with the discourses\nof Epictetus, which he communicated to me out of his own collection.',
  },
  {
    book: 'Book One',
    paragraph:
      'From Apollonius I learned freedom of will and undeviating steadiness\nof purpose; and to look to nothing else, not even for a moment, except\nto reason; and to be always the same, in sharp pains, on the occasion\nof the loss of a child, and in long illness; and to see clearly in\na living example that the same man can be both most resolute and yielding,\nand not peevish in giving his instruction; and to have had before\nmy eyes a man who clearly considered his experience and his skill\nin expounding philosophical principles as the smallest of his merits;\nand from him I learned how to receive from friends what are esteemed\nfavours, without being either humbled by them or letting them pass\nunnoticed. ',
  },
  {
    book: 'Book One',
    paragraph:
      'From Sextus, a benevolent disposition, and the example of a family\ngoverned in a fatherly manner, and the idea of living conformably\nto nature; and gravity without affectation, and to look carefully\nafter the interests of friends, and to tolerate ignorant persons,\nand those who form opinions without consideration: he had the power\nof readily accommodating himself to all, so that intercourse with\nhim was more agreeable than any flattery; and at the same time he\nwas most highly venerated by those who associated with him: and he\nhad the faculty both of discovering and ordering, in an intelligent\nand methodical way, the principles necessary for life; and he never\nshowed anger or any other passion, but was entirely free from passion,\nand also most affectionate; and he could express approbation without\nnoisy display, and he possessed much knowledge without ostentation.',
  },
  {
    book: 'Book One',
    paragraph:
      'From Alexander the grammarian, to refrain from fault-finding, and\nnot in a reproachful way to chide those who uttered any barbarous\nor solecistic or strange-sounding expression; but dexterously to introduce\nthe very expression which ought to have been used, and in the way\nof answer or giving confirmation, or joining in an inquiry about the\nthing itself, not about the word, or by some other fit suggestion.',
  },
  {
    book: 'Book One',
    paragraph:
      'From Fronto I learned to observe what envy, and duplicity, and hypocrisy\nare in a tyrant, and that generally those among us who are called\nPatricians are rather deficient in paternal affection. ',
  },
  {
    book: 'Book One',
    paragraph:
      'From Alexander the Platonic, not frequently nor without necessity\nto say to any one, or to write in a letter, that I have no leisure;\nnor continually to excuse the neglect of duties required by our relation\nto those with whom we live, by alleging urgent occupations.',
  },
  {
    book: 'Book One',
    paragraph:
      'From Catulus, not to be indifferent when a friend finds fault, even\nif he should find fault without reason, but to try to restore him\nto his usual disposition; and to be ready to speak well of teachers,\nas it is reported of Domitius and Athenodotus; and to love my children\ntruly. ',
  },
  {
    book: 'Book One',
    paragraph:
      'From my brother Severus, to love my kin, and to love truth, and to\nlove justice; and through him I learned to know Thrasea, Helvidius,\nCato, Dion, Brutus; and from him I received the idea of a polity in\nwhich there is the same law for all, a polity administered with regard\nto equal rights and equal freedom of speech, and the idea of a kingly\ngovernment which respects most of all the freedom of the governed;\nI learned from him also consistency and undeviating steadiness in\nmy regard for philosophy; and a disposition to do good, and to give\nto others readily, and to cherish good hopes, and to believe that\nI am loved by my friends; and in him I observed no concealment of\nhis opinions with respect to those whom he condemned, and that his\nfriends had no need to conjecture what he wished or did not wish,\nbut it was quite plain. ',
  },
  {
    book: 'Book One',
    paragraph:
      'From Maximus I learned self-government, and not to be led aside by\nanything; and cheerfulness in all circumstances, as well as in illness;\nand a just admixture in the moral character of sweetness and dignity,\nand to do what was set before me without complaining. I observed that\neverybody believed that he thought as he spoke, and that in all that\nhe did he never had any bad intention; and he never showed amazement\nand surprise, and was never in a hurry, and never put off doing a\nthing, nor was perplexed nor dejected, nor did he ever laugh to disguise\nhis vexation, nor, on the other hand, was he ever passionate or suspicious.\nHe was accustomed to do acts of beneficence, and was ready to forgive,\nand was free from all falsehood; and he presented the appearance of\na man who could not be diverted from right rather than of a man who\nhad been improved. I observed, too, that no man could ever think that\nhe was despised by Maximus, or ever venture to think himself a better\nman. He had also the art of being humorous in an agreeable way.',
  },
  {
    book: 'Book One',
    paragraph:
      "In my father I observed mildness of temper, and unchangeable resolution\nin the things which he had determined after due deliberation; and\nno vainglory in those things which men call honours; and a love of\nlabour and perseverance; and a readiness to listen to those who had\nanything to propose for the common weal; and undeviating firmness\nin giving to every man according to his deserts; and a knowledge derived\nfrom experience of the occasions for vigorous action and for remission.\nAnd I observed that he had overcome all passion for boys; and he considered\nhimself no more than any other citizen; and he released his friends\nfrom all obligation to sup with him or to attend him of necessity\nwhen he went abroad, and those who had failed to accompany him, by\nreason of any urgent circumstances, always found him the same. I observed\ntoo his habit of careful inquiry in all matters of deliberation, and\nhis persistency, and that he never stopped his investigation through\nbeing satisfied with appearances which first present themselves; and\nthat his disposition was to keep his friends, and not to be soon tired\nof them, nor yet to be extravagant in his affection; and to be satisfied\non all occasions, and cheerful; and to foresee things a long way off,\nand to provide for the smallest without display; and to check immediately\npopular applause and all flattery; and to be ever watchful over the\nthings which were necessary for the administration of the empire,\nand to be a good manager of the expenditure, and patiently to endure\nthe blame which he got for such conduct; and he was neither superstitious\nwith respect to the gods, nor did he court men by gifts or by trying\nto please them, or by flattering the populace; but he showed sobriety\nin all things and firmness, and never any mean thoughts or action,\nnor love of novelty. And the things which conduce in any way to the\ncommodity of life, and of which fortune gives an abundant supply,\nhe used without arrogance and without excusing himself; so that when\nhe had them, he enjoyed them without affectation, and when he had\nthem not, he did not want them. No one could ever say of him that\nhe was either a sophist or a home-bred flippant slave or a pedant;\nbut every one acknowledged him to be a man ripe, perfect, above flattery,\nable to manage his own and other men's affairs. Besides this, he honoured\nthose who were true philosophers, and he did not reproach those who\npretended to be philosophers, nor yet was he easily led by them. He\nwas also easy in conversation, and he made himself agreeable without\nany offensive affectation. He took a reasonable care of his body's\nhealth, not as one who was greatly attached to life, nor out of regard\nto personal appearance, nor yet in a careless way, but so that, through\nhis own attention, he very seldom stood in need of the physician's\nart or of medicine or external applications. He was most ready to\ngive way without envy to those who possessed any particular faculty,\nsuch as that of eloquence or knowledge of the law or of morals, or\nof anything else; and he gave them his help, that each might enjoy\nreputation according to his deserts; and he always acted conformably\nto the institutions of his country, without showing any affectation\nof doing so. Further, he was not fond of change nor unsteady, but\nhe loved to stay in the same places, and to employ himself about the\nsame things; and after his paroxysms of headache he came immediately\nfresh and vigorous to his usual occupations. His secrets were not\nbut very few and very rare, and these only about public matters; and\nhe showed prudence and economy in the exhibition of the public spectacles\nand the construction of public buildings, his donations to the people,\nand in such things, for he was a man who looked to what ought to be\ndone, not to the reputation which is got by a man's acts. He did not\ntake the bath at unseasonable hours; he was not fond of building houses,\nnor curious about what he ate, nor about the texture and colour of\nhis clothes, nor about the beauty of his slaves. His dress came from\nLorium, his villa on the coast, and from Lanuvium generally. We know\nhow he behaved to the toll-collector at Tusculum who asked his pardon;\nand such was all his behaviour. There was in him nothing harsh, nor\nimplacable, nor violent, nor, as one may say, anything carried to\nthe sweating point; but he examined all things severally, as if he\nhad abundance of time, and without confusion, in an orderly way, vigorously\nand consistently. And that might be applied to him which is recorded\nof Socrates, that he was able both to abstain from, and to enjoy,\nthose things which many are too weak to abstain from, and cannot enjoy\nwithout excess. But to be strong enough both to bear the one and to\nbe sober in the other is the mark of a man who has a perfect and invincible\nsoul, such as he showed in the illness of Maximus. ",
  },
  {
    book: 'Book One',
    paragraph:
      "To the gods I am indebted for having good grandfathers, good parents,\na good sister, good teachers, good associates, good kinsmen and friends,\nnearly everything good. Further, I owe it to the gods that I was not\nhurried into any offence against any of them, though I had a disposition\nwhich, if opportunity had offered, might have led me to do something\nof this kind; but, through their favour, there never was such a concurrence\nof circumstances as put me to the trial. Further, I am thankful to\nthe gods that I was not longer brought up with my grandfather's concubine,\nand that I preserved the flower of my youth, and that I did not make\nproof of my virility before the proper season, but even deferred the\ntime; that I was subjected to a ruler and a father who was able to\ntake away all pride from me, and to bring me to the knowledge that\nit is possible for a man to live in a palace without wanting either\nguards or embroidered dresses, or torches and statues, and such-like\nshow; but that it is in such a man's power to bring himself very near\nto the fashion of a private person, without being for this reason\neither meaner in thought, or more remiss in action, with respect to\nthe things which must be done for the public interest in a manner\nthat befits a ruler. I thank the gods for giving me such a brother,\nwho was able by his moral character to rouse me to vigilance over\nmyself, and who, at the same time, pleased me by his respect and affection;\nthat my children have not been stupid nor deformed in body; that I\ndid not make more proficiency in rhetoric, poetry, and the other studies,\nin which I should perhaps have been completely engaged, if I had seen\nthat I was making progress in them; that I made haste to place those\nwho brought me up in the station of honour, which they seemed to desire,\nwithout putting them off with hope of my doing it some time after,\nbecause they were then still young; that I knew Apollonius, Rusticus,\nMaximus; that I received clear and frequent impressions about living\naccording to nature, and what kind of a life that is, so that, so\nfar as depended on the gods, and their gifts, and help, and inspirations,\nnothing hindered me from forthwith living according to nature, though\nI still fall short of it through my own fault, and through not observing\nthe admonitions of the gods, and, I may almost say, their direct instructions;\nthat my body has held out so long in such a kind of life; that I never\ntouched either Benedicta or Theodotus, and that, after having fallen\ninto amatory passions, I was cured; and, though I was often out of\nhumour with Rusticus, I never did anything of which I had occasion\nto repent; that, though it was my mother's fate to die young, she\nspent the last years of her life with me; that, whenever I wished\nto help any man in his need, or on any other occasion, I was never\ntold that I had not the means of doing it; and that to myself the\nsame necessity never happened, to receive anything from another; that\nI have such a wife, so obedient, and so affectionate, and so simple;\nthat I had abundance of good masters for my children; and that remedies\nhave been shown to me by dreams, both others, and against bloodspitting\nand giddiness...; and that, when I had an inclination to philosophy,\nI did not fall into the hands of any sophist, and that I did not waste\nmy time on writers of histories, or in the resolution of syllogisms,\nor occupy myself about the investigation of appearances in the heavens;\nfor all these things require the help of the gods and fortune.",
  },
  { book: 'Book One', paragraph: 'Among the Quadi at the Granua. ' },
  {
    book: 'Book Two',
    paragraph:
      'Begin the morning by saying to thyself, I shall meet with the busy-body,\nthe ungrateful, arrogant, deceitful, envious, unsocial. All these\nthings happen to them by reason of their ignorance of what is good\nand evil. But I who have seen the nature of the good that it is beautiful,\nand of the bad that it is ugly, and the nature of him who does wrong,\nthat it is akin to me, not only of the same blood or seed, but that\nit participates in the same intelligence and the same portion of the\ndivinity, I can neither be injured by any of them, for no one can\nfix on me what is ugly, nor can I be angry with my kinsman, nor hate\nhim, For we are made for co-operation, like feet, like hands, like\neyelids, like the rows of the upper and lower teeth. To act against\none another then is contrary to nature; and it is acting against one\nanother to be vexed and to turn away. ',
  },
  {
    book: 'Book Two',
    paragraph:
      'Whatever this is that I am, it is a little flesh and breath, and the\nruling part. Throw away thy books; no longer distract thyself: it\nis not allowed; but as if thou wast now dying, despise the flesh;\nit is blood and bones and a network, a contexture of nerves, veins,\nand arteries. See the breath also, what kind of a thing it is, air,\nand not always the same, but every moment sent out and again sucked\nin. The third then is the ruling part: consider thus: Thou art an\nold man; no longer let this be a slave, no longer be pulled by the\nstrings like a puppet to unsocial movements, no longer either be dissatisfied\nwith thy present lot, or shrink from the future. ',
  },
  {
    book: 'Book Two',
    paragraph:
      'All that is from the gods is full of Providence. That which is from\nfortune is not separated from nature or without an interweaving and\ninvolution with the things which are ordered by Providence. From thence\nall things flow; and there is besides necessity, and that which is\nfor the advantage of the whole universe, of which thou art a part.\nBut that is good for every part of nature which the nature of the\nwhole brings, and what serves to maintain this nature. Now the universe\nis preserved, as by the changes of the elements so by the changes\nof things compounded of the elements. Let these principles be enough\nfor thee, let them always be fixed opinions. But cast away the thirst\nafter books, that thou mayest not die murmuring, but cheerfully, truly,\nand from thy heart thankful to the gods. ',
  },
  {
    book: 'Book Two',
    paragraph:
      'Remember how long thou hast been putting off these things, and how\noften thou hast received an opportunity from the gods, and yet dost\nnot use it. Thou must now at last perceive of what universe thou art\na part, and of what administrator of the universe thy existence is\nan efflux, and that a limit of time is fixed for thee, which if thou\ndost not use for clearing away the clouds from thy mind, it will go\nand thou wilt go, and it will never return. ',
  },
  {
    book: 'Book Two',
    paragraph:
      'Every moment think steadily as a Roman and a man to do what thou hast\nin hand with perfect and simple dignity, and feeling of affection,\nand freedom, and justice; and to give thyself relief from all other\nthoughts. And thou wilt give thyself relief, if thou doest every act\nof thy life as if it were the last, laying aside all carelessness\nand passionate aversion from the commands of reason, and all hypocrisy,\nand self-love, and discontent with the portion which has been given\nto thee. Thou seest how few the things are, the which if a man lays\nhold of, he is able to live a life which flows in quiet, and is like\nthe existence of the gods; for the gods on their part will require\nnothing more from him who observes these things. ',
  },
  {
    book: 'Book Two',
    paragraph:
      "Do wrong to thyself, do wrong to thyself, my soul; but thou wilt no\nlonger have the opportunity of honouring thyself. Every man's life\nis sufficient. But thine is nearly finished, though thy soul reverences\nnot itself but places thy felicity in the souls of others.",
  },
  {
    book: 'Book Two',
    paragraph:
      'Do the things external which fall upon thee distract thee? Give thyself\ntime to learn something new and good, and cease to be whirled around.\nBut then thou must also avoid being carried about the other way. For\nthose too are triflers who have wearied themselves in life by their\nactivity, and yet have no object to which to direct every movement,\nand, in a word, all their thoughts. ',
  },
  {
    book: 'Book Two',
    paragraph:
      'Through not observing what is in the mind of another a man has seldom\nbeen seen to be unhappy; but those who do not observe the movements\nof their own minds must of necessity be unhappy. ',
  },
  {
    book: 'Book Two',
    paragraph:
      'This thou must always bear in mind, what is the nature of the whole,\nand what is my nature, and how this is related to that, and what kind\nof a part it is of what kind of a whole; and that there is no one\nwho hinders thee from always doing and saying the things which are\naccording to the nature of which thou art a part. ',
  },
  {
    book: 'Book Two',
    paragraph:
      'Theophrastus, in his comparison of bad acts- such a comparison as\none would make in accordance with the common notions of mankind- says,\nlike a true philosopher, that the offences which are committed through\ndesire are more blameable than those which are committed through anger.\nFor he who is excited by anger seems to turn away from reason with\na certain pain and unconscious contraction; but he who offends through\ndesire, being overpowered by pleasure, seems to be in a manner more\nintemperate and more womanish in his offences. Rightly then, and in\na way worthy of philosophy, he said that the offence which is committed\nwith pleasure is more blameable than that which is committed with\npain; and on the whole the one is more like a person who has been\nfirst wronged and through pain is compelled to be angry; but the other\nis moved by his own impulse to do wrong, being carried towards doing\nsomething by desire. ',
  },
  {
    book: 'Book Two',
    paragraph:
      "Since it is possible that thou mayest depart from life this very moment,\nregulate every act and thought accordingly. But to go away from among\nmen, if there are gods, is not a thing to be afraid of, for the gods\nwill not involve thee in evil; but if indeed they do not exist, or\nif they have no concern about human affairs, what is it to me to live\nin a universe devoid of gods or devoid of Providence? But in truth\nthey do exist, and they do care for human things, and they have put\nall the means in man's power to enable him not to fall into real evils.\nAnd as to the rest, if there was anything evil, they would have provided\nfor this also, that it should be altogether in a man's power not to\nfall into it. Now that which does not make a man worse, how can it\nmake a man's life worse? But neither through ignorance, nor having\nthe knowledge, but not the power to guard against or correct these\nthings, is it possible that the nature of the universe has overlooked\nthem; nor is it possible that it has made so great a mistake, either\nthrough want of power or want of skill, that good and evil should\nhappen indiscriminately to the good and the bad. But death certainly,\nand life, honour and dishonour, pain and pleasure, all these things\nequally happen to good men and bad, being things which make us neither\nbetter nor worse. Therefore they are neither good nor evil.",
  },
  {
    book: 'Book Two',
    paragraph:
      'How quickly all things disappear, in the universe the bodies themselves,\nbut in time the remembrance of them; what is the nature of all sensible\nthings, and particularly those which attract with the bait of pleasure\nor terrify by pain, or are noised abroad by vapoury fame; how worthless,\nand contemptible, and sordid, and perishable, and dead they are- all\nthis it is the part of the intellectual faculty to observe. To observe\ntoo who these are whose opinions and voices give reputation; what\ndeath is, and the fact that, if a man looks at it in itself, and by\nthe abstractive power of reflection resolves into their parts all\nthe things which present themselves to the imagination in it, he will\nthen consider it to be nothing else than an operation of nature; and\nif any one is afraid of an operation of nature, he is a child. This,\nhowever, is not only an operation of nature, but it is also a thing\nwhich conduces to the purposes of nature. To observe too how man comes\nnear to the deity, and by what part of him, and when this part of\nman is so disposed. ',
  },
  {
    book: 'Book Two',
    paragraph:
      "Nothing is more wretched than a man who traverses everything in a\nround, and pries into the things beneath the earth, as the poet says,\nand seeks by conjecture what is in the minds of his neighbours, without\nperceiving that it is sufficient to attend to the daemon within him,\nand to reverence it sincerely. And reverence of the daemon consists\nin keeping it pure from passion and thoughtlessness, and dissatisfaction\nwith what comes from gods and men. For the things from the gods merit\nveneration for their excellence; and the things from men should be\ndear to us by reason of kinship; and sometimes even, in a manner,\nthey move our pity by reason of men's ignorance of good and bad; this\ndefect being not less than that which deprives us of the power of\ndistinguishing things that are white and black. ",
  },
  {
    book: 'Book Two',
    paragraph:
      'Though thou shouldst be going to live three thousand years, and as\nmany times ten thousand years, still remember that no man loses any\nother life than this which he now lives, nor lives any other than\nthis which he now loses. The longest and shortest are thus brought\nto the same. For the present is the same to all, though that which\nperishes is not the same; and so that which is lost appears to be\na mere moment. For a man cannot lose either the past or the future:\nfor what a man has not, how can any one take this from him? These\ntwo things then thou must bear in mind; the one, that all things from\neternity are of like forms and come round in a circle, and that it\nmakes no difference whether a man shall see the same things during\na hundred years or two hundred, or an infinite time; and the second,\nthat the longest liver and he who will die soonest lose just the same.\nFor the present is the only thing of which a man can be deprived,\nif it is true that this is the only thing which he has, and that a\nman cannot lose a thing if he has it not. ',
  },
  {
    book: 'Book Two',
    paragraph:
      'Remember that all is opinion. For what was said by the Cynic Monimus\nis manifest: and manifest too is the use of what was said, if a man\nreceives what may be got out of it as far as it is true.',
  },
  {
    book: 'Book Two',
    paragraph:
      'The soul of man does violence to itself, first of all, when it becomes\nan abscess and, as it were, a tumour on the universe, so far as it\ncan. For to be vexed at anything which happens is a separation of\nourselves from nature, in some part of which the natures of all other\nthings are contained. In the next place, the soul does violence to\nitself when it turns away from any man, or even moves towards him\nwith the intention of injuring, such as are the souls of those who\nare angry. In the third place, the soul does violence to itself when\nit is overpowered by pleasure or by pain. Fourthly, when it plays\na part, and does or says anything insincerely and untruly. Fifthly,\nwhen it allows any act of its own and any movement to be without an\naim, and does anything thoughtlessly and without considering what\nit is, it being right that even the smallest things be done with reference\nto an end; and the end of rational animals is to follow the reason\nand the law of the most ancient city and polity. ',
  },
  {
    book: 'Book Two',
    paragraph:
      "Of human life the time is a point, and the substance is in a flux,\nand the perception dull, and the composition of the whole body subject\nto putrefaction, and the soul a whirl, and fortune hard to divine,\nand fame a thing devoid of judgement. And, to say all in a word, everything\nwhich belongs to the body is a stream, and what belongs to the soul\nis a dream and vapour, and life is a warfare and a stranger's sojourn,\nand after-fame is oblivion. What then is that which is able to conduct\na man? One thing and only one, philosophy. But this consists in keeping\nthe daemon within a man free from violence and unharmed, superior\nto pains and pleasures, doing nothing without purpose, nor yet falsely\nand with hypocrisy, not feeling the need of another man's doing or\nnot doing anything; and besides, accepting all that happens, and all\nthat is allotted, as coming from thence, wherever it is, from whence\nhe himself came; and, finally, waiting for death with a cheerful mind,\nas being nothing else than a dissolution of the elements of which\nevery living being is compounded. But if there is no harm to the elements\nthemselves in each continually changing into another, why should a\nman have any apprehension about the change and dissolution of all\nthe elements? For it is according to nature, and nothing is evil which\nis according to nature. ",
  },
  { book: 'Book Two', paragraph: 'This in Carnuntum. ' },
  {
    book: 'Book Three',
    paragraph:
      'We ught to consider not only that our life is daily wasting away\nand a smaller part of it is left, but another thing also must be taken\ninto the account, that if a man should live longer, it is quite uncertain\nwhether the understanding will still continue sufficient for the comprehension\nof things, and retain the power of contemplation which strives to\nacquire the knowledge of the divine and the human. For if he shall\nbegin to fall into dotage, perspiration and nutrition and imagination\nand appetite, and whatever else there is of the kind, will not fail;\nbut the power of making use of ourselves, and filling up the measure\nof our duty, and clearly separating all appearances, and considering\nwhether a man should now depart from life, and whatever else of the\nkind absolutely requires a disciplined reason, all this is already\nextinguished. We must make haste then, not only because we are daily\nnearer to death, but also because the conception of things and the\nunderstanding of them cease first. ',
  },
  {
    book: 'Book Three',
    paragraph:
      "We ought to observe also that even the things which follow after the\nthings which are produced according to nature contain something pleasing\nand attractive. For instance, when bread is baked some parts are split\nat the surface, and these parts which thus open, and have a certain\nfashion contrary to the purpose of the baker's art, are beautiful\nin a manner, and in a peculiar way excite a desire for eating. And\nagain, figs, when they are quite ripe, gape open; and in the ripe\nolives the very circumstance of their being near to rottenness adds\na peculiar beauty to the fruit. And the ears of corn bending down,\nand the lion's eyebrows, and the foam which flows from the mouth of\nwild boars, and many other things- though they are far from being\nbeautiful, if a man should examine them severally- still, because\nthey are consequent upon the things which are formed by nature, help\nto adorn them, and they please the mind; so that if a man should have\na feeling and deeper insight with respect to the things which are\nproduced in the universe, there is hardly one of those which follow\nby way of consequence which will not seem to him to be in a manner\ndisposed so as to give pleasure. And so he will see even the real\ngaping jaws of wild beasts with no less pleasure than those which\npainters and sculptors show by imitation; and in an old woman and\nan old man he will be able to see a certain maturity and comeliness;\nand the attractive loveliness of young persons he will be able to\nlook on with chaste eyes; and many such things will present themselves,\nnot pleasing to every man, but to him only who has become truly familiar\nwith nature and her works. ",
  },
  {
    book: 'Book Three',
    paragraph:
      'Hippocrates after curing many diseases himself fell sick and died.\nThe Chaldaei foretold the deaths of many, and then fate caught them\ntoo. Alexander, and Pompeius, and Caius Caesar, after so often completely\ndestroying whole cities, and in battle cutting to pieces many ten\nthousands of cavalry and infantry, themselves too at last departed\nfrom life. Heraclitus, after so many speculations on the conflagration\nof the universe, was filled with water internally and died smeared\nall over with mud. And lice destroyed Democritus; and other lice killed\nSocrates. What means all this? Thou hast embarked, thou hast made\nthe voyage, thou art come to shore; get out. If indeed to another\nlife, there is no want of gods, not even there. But if to a state\nwithout sensation, thou wilt cease to be held by pains and pleasures,\nand to be a slave to the vessel, which is as much inferior as that\nwhich serves it is superior: for the one is intelligence and deity;\nthe other is earth and corruption. ',
  },
  {
    book: 'Book Three',
    paragraph:
      "Do not waste the remainder of thy life in thoughts about others, when\nthou dost not refer thy thoughts to some object of common utility.\nFor thou losest the opportunity of doing something else when thou\nhast such thoughts as these, What is such a person doing, and why,\nand what is he saying, and what is he thinking of, and what is he\ncontriving, and whatever else of the kind makes us wander away from\nthe observation of our own ruling power. We ought then to check in\nthe series of our thoughts everything that is without a purpose and\nuseless, but most of all the over-curious feeling and the malignant;\nand a man should use himself to think of those things only about which\nif one should suddenly ask, What hast thou now in thy thoughts? With\nperfect openness thou mightest, immediately answer, This or That;\nso that from thy words it should be plain that everything in thee\nis simple and benevolent, and such as befits a social animal, and\none that cares not for thoughts about pleasure or sensual enjoyments\nat all, nor has any rivalry or envy and suspicion, or anything else\nfor which thou wouldst blush if thou shouldst say that thou hadst\nit in thy mind. For the man who is such and no longer delays being\namong the number of the best, is like a priest and minister of the\ngods, using too the deity which is planted within him, which makes\nthe man uncontaminated by pleasure, unharmed by any pain, untouched\nby any insult, feeling no wrong, a fighter in the noblest fight, one\nwho cannot be overpowered by any passion, dyed deep with justice,\naccepting with all his soul everything which happens and is assigned\nto him as his portion; and not often, nor yet without great necessity\nand for the general interest, imagining what another says, or does,\nor thinks. For it is only what belongs to himself that he makes the\nmatter for his activity; and he constantly thinks of that which is\nallotted to himself out of the sum total of things, and he makes his\nown acts fair, and he is persuaded that his own portion is good. For\nthe lot which is assigned to each man is carried along with him and\ncarries him along with it. And he remembers also that every rational\nanimal is his kinsman, and that to care for all men is according to\nman's nature; and a man should hold on to the opinion not of all,\nbut of those only who confessedly live according to nature. But as\nto those who live not so, he always bears in mind what kind of men\nthey are both at home and from home, both by night and by day, and\nwhat they are, and with what men they live an impure life. Accordingly,\nhe does not value at all the praise which comes from such men, since\nthey are not even satisfied with themselves. ",
  },
  {
    book: 'Book Three',
    paragraph:
      "Labour not unwillingly, nor without regard to the common interest,\nnor without due consideration, nor with distraction; nor let studied\nornament set off thy thoughts, and be not either a man of many words,\nor busy about too many things. And further, let the deity which is\nin thee be the guardian of a living being, manly and of ripe age,\nand engaged in matter political, and a Roman, and a ruler, who has\ntaken his post like a man waiting for the signal which summons him\nfrom life, and ready to go, having need neither of oath nor of any\nman's testimony. Be cheerful also, and seek not external help nor\nthe tranquility which others give. A man then must stand erect, not\nbe kept erect by others. ",
  },
  {
    book: 'Book Three',
    paragraph:
      "If thou findest in human life anything better than justice, truth,\ntemperance, fortitude, and, in a word, anything better than thy own\nmind's self-satisfaction in the things which it enables thee to do\naccording to right reason, and in the condition that is assigned to\nthee without thy own choice; if, I say, thou seest anything better\nthan this, turn to it with all thy soul, and enjoy that which thou\nhast found to be the best. But if nothing appears to be better than\nthe deity which is planted in thee, which has subjected to itself\nall thy appetites, and carefully examines all the impressions, and,\nas Socrates said, has detached itself from the persuasions of sense,\nand has submitted itself to the gods, and cares for mankind; if thou\nfindest everything else smaller and of less value than this, give\nplace to nothing else, for if thou dost once diverge and incline to\nit, thou wilt no longer without distraction be able to give the preference\nto that good thing which is thy proper possession and thy own; for\nit is not right that anything of any other kind, such as praise from\nthe many, or power, or enjoyment of pleasure, should come into competition\nwith that which is rationally and politically or practically good.\nAll these things, even though they may seem to adapt themselves to\nthe better things in a small degree, obtain the superiority all at\nonce, and carry us away. But do thou, I say, simply and freely choose\nthe better, and hold to it.- But that which is useful is the better.-\nWell then, if it is useful to thee as a rational being, keep to it;\nbut if it is only useful to thee as an animal, say so, and maintain\nthy judgement without arrogance: only take care that thou makest the\ninquiry by a sure method. ",
  },
  {
    book: 'Book Three',
    paragraph:
      'Never value anything as profitable to thyself which shall compel thee\nto break thy promise, to lose thy self-respect, to hate any man, to\nsuspect, to curse, to act the hypocrite, to desire anything which\nneeds walls and curtains: for he who has preferred to everything intelligence\nand daemon and the worship of its excellence, acts no tragic part,\ndoes not groan, will not need either solitude or much company; and,\nwhat is chief of all, he will live without either pursuing or flying\nfrom death; but whether for a longer or a shorter time he shall have\nthe soul inclosed in the body, he cares not at all: for even if he\nmust depart immediately, he will go as readily as if he were going\nto do anything else which can be done with decency and order; taking\ncare of this only all through life, that his thoughts turn not away\nfrom anything which belongs to an intelligent animal and a member\nof a civil community. ',
  },
  {
    book: 'Book Three',
    paragraph:
      'In the mind of one who is chastened and purified thou wilt find no\ncorrupt matter, nor impurity, nor any sore skinned over. Nor is his\nlife incomplete when fate overtakes him, as one may say of an actor\nwho leaves the stage before ending and finishing the play. Besides,\nthere is in him nothing servile, nor affected, nor too closely bound\nto other things, nor yet detached from other things, nothing worthy\nof blame, nothing which seeks a hiding-place. ',
  },
  {
    book: 'Book Three',
    paragraph:
      'Reverence the faculty which produces opinion. On this faculty it entirely\ndepends whether there shall exist in thy ruling part any opinion inconsistent\nwith nature and the constitution of the rational animal. And this\nfaculty promises freedom from hasty judgement, and friendship towards\nmen, and obedience to the gods. ',
  },
  {
    book: 'Book Three',
    paragraph:
      'Throwing away then all things, hold to these only which are few; and\nbesides bear in mind that every man lives only this present time,\nwhich is an indivisible point, and that all the rest of his life is\neither past or it is uncertain. Short then is the time which every\nman lives, and small the nook of the earth where he lives; and short\ntoo the longest posthumous fame, and even this only continued by a\nsuccession of poor human beings, who will very soon die, and who know\nnot even themselves, much less him who died long ago. ',
  },
  {
    book: 'Book Three',
    paragraph:
      'To the aids which have been mentioned let this one still be added:-\nMake for thyself a definition or description of the thing which is\npresented to thee, so as to see distinctly what kind of a thing it\nis in its substance, in its nudity, in its complete entirety, and\ntell thyself its proper name, and the names of the things of which\nit has been compounded, and into which it will be resolved. For nothing\nis so productive of elevation of mind as to be able to examine methodically\nand truly every object which is presented to thee in life, and always\nto look at things so as to see at the same time what kind of universe\nthis is, and what kind of use everything performs in it, and what\nvalue everything has with reference to the whole, and what with reference\nto man, who is a citizen of the highest city, of which all other cities\nare like families; what each thing is, and of what it is composed,\nand how long it is the nature of this thing to endure which now makes\nan impression on me, and what virtue I have need of with respect to\nit, such as gentleness, manliness, truth, fidelity, simplicity, contentment,\nand the rest. Wherefore, on every occasion a man should say: this\ncomes from God; and this is according to the apportionment and spinning\nof the thread of destiny, and such-like coincidence and chance; and\nthis is from one of the same stock, and a kinsman and partner, one\nwho knows not however what is according to his nature. But I know;\nfor this reason I behave towards him according to the natural law\nof fellowship with benevolence and justice. At the same time however\nin things indifferent I attempt to ascertain the value of each.',
  },
  {
    book: 'Book Three',
    paragraph:
      'If thou workest at that which is before thee, following right reason\nseriously, vigorously, calmly, without allowing anything else to distract\nthee, but keeping thy divine part pure, as if thou shouldst be bound\nto give it back immediately; if thou holdest to this, expecting nothing,\nfearing nothing, but satisfied with thy present activity according\nto nature, and with heroic truth in every word and sound which thou\nutterest, thou wilt live happy. And there is no man who is able to\nprevent this. ',
  },
  {
    book: 'Book Three',
    paragraph:
      'As physicians have always their instruments and knives ready for cases\nwhich suddenly require their skill, so do thou have principles ready\nfor the understanding of things divine and human, and for doing everything,\neven the smallest, with a recollection of the bond which unites the\ndivine and human to one another. For neither wilt thou do anything\nwell which pertains to man without at the same time having a reference\nto things divine; nor the contrary. ',
  },
  {
    book: 'Book Three',
    paragraph:
      'No longer wander at hazard; for neither wilt thou read thy own memoirs,\nnor the acts of the ancient Romans and Hellenes, and the selections\nfrom books which thou wast reserving for thy old age. Hasten then\nto the end which thou hast before thee, and throwing away idle hopes,\ncome to thy own aid, if thou carest at all for thyself, while it is\nin thy power. ',
  },
  {
    book: 'Book Three',
    paragraph:
      'They know not how many things are signified by the words stealing,\nsowing, buying, keeping quiet, seeing what ought to be done; for this\nis not effected by the eyes, but by another kind of vision.',
  },
  {
    book: 'Book Three',
    paragraph:
      'Body, soul, intelligence: to the body belong sensations, to the soul\nappetites, to the intelligence principles. To receive the impressions\nof forms by means of appearances belongs even to animals; to be pulled\nby the strings of desire belongs both to wild beasts and to men who\nhave made themselves into women, and to a Phalaris and a Nero: and\nto have the intelligence that guides to the things which appear suitable\nbelongs also to those who do not believe in the gods, and who betray\ntheir country, and do their impure deeds when they have shut the doors.\nIf then everything else is common to all that I have mentioned, there\nremains that which is peculiar to the good man, to be pleased and\ncontent with what happens, and with the thread which is spun for him;\nand not to defile the divinity which is planted in his breast, nor\ndisturb it by a crowd of images, but to preserve it tranquil, following\nit obediently as a god, neither saying anything contrary to the truth,\nnor doing anything contrary to justice. And if all men refuse to believe\nthat he lives a simple, modest, and contented life, he is neither\nangry with any of them, nor does he deviate from the way which leads\nto the end of life, to which a man ought to come pure, tranquil, ready\nto depart, and without any compulsion perfectly reconciled to his\nlot. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'That which rules within, when it is according to nature, is so affected\nwith respect to the events which happen, that it always easily adapts\nitself to that which is and is presented to it. For it requires no\ndefinite material, but it moves towards its purpose, under certain\nconditions however; and it makes a material for itself out of that\nwhich opposes it, as fire lays hold of what falls into it, by which\na small light would have been extinguished: but when the fire is strong,\nit soon appropriates to itself the matter which is heaped on it, and\nconsumes it, and rises higher by means of this very material.',
  },
  {
    book: 'Book Four',
    paragraph:
      'Let no act be done without a purpose, nor otherwise than according\nto the perfect principles of art. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Men seek retreats for themselves, houses in the country, sea-shores,\nand mountains; and thou too art wont to desire such things very much.\nBut this is altogether a mark of the most common sort of men, for\nit is in thy power whenever thou shalt choose to retire into thyself.\nFor nowhere either with more quiet or more freedom from trouble does\na man retire than into his own soul, particularly when he has within\nhim such thoughts that by looking into them he is immediately in perfect\ntranquility; and I affirm that tranquility is nothing else than the\ngood ordering of the mind. Constantly then give to thyself this retreat,\nand renew thyself; and let thy principles be brief and fundamental,\nwhich, as soon as thou shalt recur to them, will be sufficient to\ncleanse the soul completely, and to send thee back free from all discontent\nwith the things to which thou returnest. For with what art thou discontented?\nWith the badness of men? Recall to thy mind this conclusion, that\nrational animals exist for one another, and that to endure is a part\nof justice, and that men do wrong involuntarily; and consider how\nmany already, after mutual enmity, suspicion, hatred, and fighting,\nhave been stretched dead, reduced to ashes; and be quiet at last.-\nBut perhaps thou art dissatisfied with that which is assigned to thee\nout of the universe.- Recall to thy recollection this alternative;\neither there is providence or atoms, fortuitous concurrence of things;\nor remember the arguments by which it has been proved that the world\nis a kind of political community, and be quiet at last.- But perhaps\ncorporeal things will still fasten upon thee.- Consider then further\nthat the mind mingles not with the breath, whether moving gently or\nviolently, when it has once drawn itself apart and discovered its\nown power, and think also of all that thou hast heard and assented\nto about pain and pleasure, and be quiet at last.- But perhaps the\ndesire of the thing called fame will torment thee.- See how soon everything\nis forgotten, and look at the chaos of infinite time on each side\nof the present, and the emptiness of applause, and the changeableness\nand want of judgement in those who pretend to give praise, and the\nnarrowness of the space within which it is circumscribed, and be quiet\nat last. For the whole earth is a point, and how small a nook in it\nis this thy dwelling, and how few are there in it, and what kind of\npeople are they who will praise thee. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'This then remains: Remember to retire into this little territory of\nthy own, and above all do not distract or strain thyself, but be free,\nand look at things as a man, as a human being, as a citizen, as a\nmortal. But among the things readiest to thy hand to which thou shalt\nturn, let there be these, which are two. One is that things do not\ntouch the soul, for they are external and remain immovable; but our\nperturbations come only from the opinion which is within. The other\nis that all these things, which thou seest, change immediately and\nwill no longer be; and constantly bear in mind how many of these changes\nthou hast already witnessed. The universe is transformation: life\nis opinion. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'If our intellectual part is common, the reason also, in respect of\nwhich we are rational beings, is common: if this is so, common also\nis the reason which commands us what to do, and what not to do; if\nthis is so, there is a common law also; if this is so, we are fellow-citizens;\nif this is so, we are members of some political community; if this\nis so, the world is in a manner a state. For of what other common\npolitical community will any one say that the whole human race are\nmembers? And from thence, from this common political community comes\nalso our very intellectual faculty and reasoning faculty and our capacity\nfor law; or whence do they come? For as my earthly part is a portion\ngiven to me from certain earth, and that which is watery from another\nelement, and that which is hot and fiery from some peculiar source\n(for nothing comes out of that which is nothing, as nothing also returns\nto non-existence), so also the intellectual part comes from some source.',
  },
  {
    book: 'Book Four',
    paragraph:
      'Death is such as generation is, a mystery of nature; a composition\nout of the same elements, and a decomposition into the same; and altogether\nnot a thing of which any man should be ashamed, for it is not contrary\nto the nature of a reasonable animal, and not contrary to the reason\nof our constitution. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'It is natural that these things should be done by such persons, it\nis a matter of necessity; and if a man will not have it so, he will\nnot allow the fig-tree to have juice. But by all means bear this in\nmind, that within a very short time both thou and he will be dead;\nand soon not even your names will be left behind. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Take away thy opinion, and then there is taken away the complaint,\n"I have been harmed." Take away the complaint, "I have been harmed,"\nand the harm is taken away. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'That which does not make a man worse than he was, also does not make\nhis life worse, nor does it harm him either from without or from within.',
  },
  {
    book: 'Book Four',
    paragraph:
      'The nature of that which is universally useful has been compelled\nto do this. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Consider that everything which happens, happens justly, and if thou\nobservest carefully, thou wilt find it to be so. I do not say only\nwith respect to the continuity of the series of things, but with respect\nto what is just, and as if it were done by one who assigns to each\nthing its value. Observe then as thou hast begun; and whatever thou\ndoest, do it in conjunction with this, the being good, and in the\nsense in which a man is properly understood to be good. Keep to this\nin every action. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Do not have such an opinion of things as he has who does thee wrong,\nor such as he wishes thee to have, but look at them as they are in\ntruth. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'A man should always have these two rules in readiness; the one, to\ndo only whatever the reason of the ruling and legislating faculty\nmay suggest for the use of men; the other, to change thy opinion,\nif there is any one at hand who sets thee right and moves thee from\nany opinion. But this change of opinion must proceed only from a certain\npersuasion, as of what is just or of common advantage, and the like,\nnot because it appears pleasant or brings reputation. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Hast thou reason? I have.- Why then dost not thou use it? For if this\ndoes its own work, what else dost thou wish? ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Thou hast existed as a part. Thou shalt disappear in that which produced\nthee; but rather thou shalt be received back into its seminal principle\nby transmutation. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Many grains of frankincense on the same altar: one falls before, another\nfalls after; but it makes no difference. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Within ten days thou wilt seem a god to those to whom thou art now\na beast and an ape, if thou wilt return to thy principles and the\nworship of reason. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Do not act as if thou wert going to live ten thousand years. Death\nhangs over thee. While thou livest, while it is in thy power, be good.',
  },
  {
    book: 'Book Four',
    paragraph:
      'How much trouble he avoids who does not look to see what his neighbour\nsays or does or thinks, but only to what he does himself, that it\nmay be just and pure; or as Agathon says, look not round at the depraved\nmorals of others, but run straight along the line without deviating\nfrom it. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'He who has a vehement desire for posthumous fame does not consider\nthat every one of those who remember him will himself also die very\nsoon; then again also they who have succeeded them, until the whole\nremembrance shall have been extinguished as it is transmitted through\nmen who foolishly admire and perish. But suppose that those who will\nremember are even immortal, and that the remembrance will be immortal,\nwhat then is this to thee? And I say not what is it to the dead, but\nwhat is it to the living? What is praise except indeed so far as it\nhas a certain utility? For thou now rejectest unseasonably the gift\nof nature, clinging to something else... ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Everything which is in any way beautiful is beautiful in itself, and\nterminates in itself, not having praise as part of itself. Neither\nworse then nor better is a thing made by being praised. I affirm this\nalso of the things which are called beautiful by the vulgar, for example,\nmaterial things and works of art. That which is really beautiful has\nno need of anything; not more than law, not more than truth, not more\nthan benevolence or modesty. Which of these things is beautiful because\nit is praised, or spoiled by being blamed? Is such a thing as an emerald\nmade worse than it was, if it is not praised? Or gold, ivory, purple,\na lyre, a little knife, a flower, a shrub? ',
  },
  {
    book: 'Book Four',
    paragraph:
      'If souls continue to exist, how does the air contain them from eternity?-\nBut how does the earth contain the bodies of those who have been buried\nfrom time so remote? For as here the mutation of these bodies after\na certain continuance, whatever it may be, and their dissolution make\nroom for other dead bodies; so the souls which are removed into the\nair after subsisting for some time are transmuted and diffused, and\nassume a fiery nature by being received into the seminal intelligence\nof the universe, and in this way make room for the fresh souls which\ncome to dwell there. And this is the answer which a man might give\non the hypothesis of souls continuing to exist. But we must not only\nthink of the number of bodies which are thus buried, but also of the\nnumber of animals which are daily eaten by us and the other animals.\nFor what a number is consumed, and thus in a manner buried in the\nbodies of those who feed on them! And nevertheless this earth receives\nthem by reason of the changes of these bodies into blood, and the\ntransformations into the aerial or the fiery element. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'What is the investigation into the truth in this matter? The division\ninto that which is material and that which is the cause of form, the\nformal. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Do not be whirled about, but in every movement have respect to justice,\nand on the occasion of every impression maintain the faculty of comprehension\nor understanding. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Everything harmonizes with me, which is harmonious to thee, O Universe.\nNothing for me is too early nor too late, which is in due time for\nthee. Everything is fruit to me which thy seasons bring, O Nature:\nfrom thee are all things, in thee are all things, to thee all things\nreturn. The poet says, Dear city of Cecrops; and wilt not thou say,\nDear city of Zeus? ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Occupy thyself with few things, says the philosopher, if thou wouldst\nbe tranquil.- But consider if it would not be better to say, Do what\nis necessary, and whatever the reason of the animal which is naturally\nsocial requires, and as it requires. For this brings not only the\ntranquility which comes from doing well, but also that which comes\nfrom doing few things. For the greatest part of what we say and do\nbeing unnecessary, if a man takes this away, he will have more leisure\nand less uneasiness. Accordingly on every occasion a man should ask\nhimself, Is this one of the unnecessary things? Now a man should take\naway not only unnecessary acts, but also, unnecessary thoughts, for\nthus superfluous acts will not follow after. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Try how the life of the good man suits thee, the life of him who is\nsatisfied with his portion out of the whole, and satisfied with his\nown just acts and benevolent disposition. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Hast thou seen those things? Look also at these. Do not disturb thyself.\nMake thyself all simplicity. Does any one do wrong? It is to himself\nthat he does the wrong. Has anything happened to thee? Well; out of\nthe universe from the beginning everything which happens has been\napportioned and spun out to thee. In a word, thy life is short. Thou\nmust turn to profit the present by the aid of reason and justice.\nBe sober in thy relaxation. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Either it is a well-arranged universe or a chaos huddled together,\nbut still a universe. But can a certain order subsist in thee, and\ndisorder in the All? And this too when all things are so separated\nand diffused and sympathetic. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'A black character, a womanish character, a stubborn character, bestial,\nchildish, animal, stupid, counterfeit, scurrilous, fraudulent, tyrannical.',
  },
  {
    book: 'Book Four',
    paragraph:
      'If he is a stranger to the universe who does not know what is in it,\nno less is he a stranger who does not know what is going on in it.\nHe is a runaway, who flies from social reason; he is blind, who shuts\nthe eyes of the understanding; he is poor, who has need of another,\nand has not from himself all things which are useful for life. He\nis an abscess on the universe who withdraws and separates himself\nfrom the reason of our common nature through being displeased with\nthe things which happen, for the same nature produces this, and has\nproduced thee too: he is a piece rent asunder from the state, who\ntears his own soul from that of reasonable animals, which is one.',
  },
  {
    book: 'Book Four',
    paragraph:
      'The one is a philosopher without a tunic, and the other without a\nbook: here is another half naked: Bread I have not, he says, and I\nabide by reason.- And I do not get the means of living out of my learning,\nand I abide by my reason. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Love the art, poor as it may be, which thou hast learned, and be content\nwith it; and pass through the rest of life like one who has intrusted\nto the gods with his whole soul all that he has, making thyself neither\nthe tyrant nor the slave of any man. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Consider, for example, the times of Vespasian. Thou wilt see all these\nthings, people marrying, bringing up children, sick, dying, warring,\nfeasting, trafficking, cultivating the ground, flattering, obstinately\narrogant, suspecting, plotting, wishing for some to die, grumbling\nabout the present, loving, heaping up treasure, desiring counsulship,\nkingly power. Well then, that life of these people no longer exists\nat all. Again, remove to the times of Trajan. Again, all is the same.\nTheir life too is gone. In like manner view also the other epochs\nof time and of whole nations, and see how many after great efforts\nsoon fell and were resolved into the elements. But chiefly thou shouldst\nthink of those whom thou hast thyself known distracting themselves\nabout idle things, neglecting to do what was in accordance with their\nproper constitution, and to hold firmly to this and to be content\nwith it. And herein it is necessary to remember that the attention\ngiven to everything has its proper value and proportion. For thus\nthou wilt not be dissatisfied, if thou appliest thyself to smaller\nmatters no further than is fit. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'The words which were formerly familiar are now antiquated: so also\nthe names of those who were famed of old, are now in a manner antiquated,\nCamillus, Caeso, Volesus, Leonnatus, and a little after also Scipio\nand Cato, then Augustus, then also Hadrian and Antoninus. For all\nthings soon pass away and become a mere tale, and complete oblivion\nsoon buries them. And I say this of those who have shone in a wondrous\nway. For the rest, as soon as they have breathed out their breath,\nthey are gone, and no man speaks of them. And, to conclude the matter,\nwhat is even an eternal remembrance? A mere nothing. What then is\nthat about which we ought to employ our serious pains? This one thing,\nthoughts just, and acts social, and words which never lie, and a disposition\nwhich gladly accepts all that happens, as necessary, as usual, as\nflowing from a principle and source of the same kind. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Willingly give thyself up to Clotho, one of the Fates, allowing her\nto spin thy thread into whatever things she pleases. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Everything is only for a day, both that which remembers and that which\nis remembered. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Observe constantly that all things take place by change, and accustom\nthyself to consider that the nature of the Universe loves nothing\nso much as to change the things which are and to make new things like\nthem. For everything that exists is in a manner the seed of that which\nwill be. But thou art thinking only of seeds which are cast into the\nearth or into a womb: but this is a very vulgar notion. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Thou wilt soon die, and thou art not yet simple, not free from perturbations,\nnor without suspicion of being hurt by external things, nor kindly\ndisposed towards all; nor dost thou yet place wisdom only in acting\njustly. ',
  },
  {
    book: 'Book Four',
    paragraph:
      "Examine men's ruling principles, even those of the wise, what kind\nof things they avoid, and what kind they pursue. ",
  },
  {
    book: 'Book Four',
    paragraph:
      'What is evil to thee does not subsist in the ruling principle of another;\nnor yet in any turning and mutation of thy corporeal covering. Where\nis it then? It is in that part of thee in which subsists the power\nof forming opinions about evils. Let this power then not form such\nopinions, and all is well. And if that which is nearest to it, the\npoor body, is burnt, filled with matter and rottenness, nevertheless\nlet the part which forms opinions about these things be quiet, that\nis, let it judge that nothing is either bad or good which can happen\nequally to the bad man and the good. For that which happens equally\nto him who lives contrary to nature and to him who lives according\nto nature, is neither according to nature nor contrary to nature.',
  },
  {
    book: 'Book Four',
    paragraph:
      'Constantly regard the universe as one living being, having one substance\nand one soul; and observe how all things have reference to one perception,\nthe perception of this one living being; and how all things act with\none movement; and how all things are the cooperating causes of all\nthings which exist; observe too the continuous spinning of the thread\nand the contexture of the web. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Thou art a little soul bearing about a corpse, as Epictetus used to\nsay. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'It is no evil for things to undergo change, and no good for things\nto subsist in consequence of change. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Time is like a river made up of the events which happen, and a violent\nstream; for as soon as a thing has been seen, it is carried away,\nand another comes in its place, and this will be carried away too.',
  },
  {
    book: 'Book Four',
    paragraph:
      'Everything which happens is as familiar and well known as the rose\nin spring and the fruit in summer; for such is disease, and death,\nand calumny, and treachery, and whatever else delights fools or vexes\nthem. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'In the series of things those which follow are always aptly fitted\nto those which have gone before; for this series is not like a mere\nenumeration of disjointed things, which has only a necessary sequence,\nbut it is a rational connection: and as all existing things are arranged\ntogether harmoniously, so the things which come into existence exhibit\nno mere succession, but a certain wonderful relationship.',
  },
  {
    book: 'Book Four',
    paragraph:
      'Always remember the saying of Heraclitus, that the death of earth\nis to become water, and the death of water is to become air, and the\ndeath of air is to become fire, and reversely. And think too of him\nwho forgets whither the way leads, and that men quarrel with that\nwith which they are most constantly in communion, the reason which\ngoverns the universe; and the things which daily meet with seem to\nthem strange: and consider that we ought not to act and speak as if\nwe were asleep, for even in sleep we seem to act and speak; and that\nwe ought not, like children who learn from their parents, simply to\nact and speak as we have been taught. ',
  },
  {
    book: 'Book Four',
    paragraph:
      'If any god told thee that thou shalt die to-morrow, or certainly on\nthe day after to-morrow, thou wouldst not care much whether it was\non the third day or on the morrow, unless thou wast in the highest\ndegree mean-spirited- for how small is the difference?- So think it\nno great thing to die after as many years as thou canst name rather\nthan to-morrow. ',
  },
  {
    book: 'Book Four',
    paragraph:
      "Think continually how many physicians are dead after often contracting\ntheir eyebrows over the sick; and how many astrologers after predicting\nwith great pretensions the deaths of others; and how many philosophers\nafter endless discourses on death or immortality; how many heroes\nafter killing thousands; and how many tyrants who have used their\npower over men's lives with terrible insolence as if they were immortal;\nand how many cities are entirely dead, so to speak, Helice and Pompeii\nand Herculaneum, and others innumerable. Add to the reckoning all\nwhom thou hast known, one after another. One man after burying another\nhas been laid out dead, and another buries him: and all this in a\nshort time. To conclude, always observe how ephemeral and worthless\nhuman things are, and what was yesterday a little mucus to-morrow\nwill be a mummy or ashes. Pass then through this little space of time\nconformably to nature, and end thy journey in content, just as an\nolive falls off when it is ripe, blessing nature who produced it,\nand thanking the tree on which it grew. ",
  },
  {
    book: 'Book Four',
    paragraph:
      'Be like the promontory against which the waves continually break,\nbut it stands firm and tames the fury of the water around it.',
  },
  {
    book: 'Book Four',
    paragraph:
      "Unhappy am I because this has happened to me.- Not so, but happy am\nI, though this has happened to me, because I continue free from pain,\nneither crushed by the present nor fearing the future. For such a\nthing as this might have happened to every man; but every man would\nnot have continued free from pain on such an occasion. Why then is\nthat rather a misfortune than this a good fortune? And dost thou in\nall cases call that a man's misfortune, which is not a deviation from\nman's nature? And does a thing seem to thee to be a deviation from\nman's nature, when it is not contrary to the will of man's nature?\nWell, thou knowest the will of nature. Will then this which has happened\nprevent thee from being just, magnanimous, temperate, prudent, secure\nagainst inconsiderate opinions and falsehood; will it prevent thee\nfrom having modesty, freedom, and everything else, by the presence\nof which man's nature obtains all that is its own? Remember too on\nevery occasion which leads thee to vexation to apply this principle:\nnot that this is a misfortune, but that to bear it nobly is good fortune.",
  },
  {
    book: 'Book Four',
    paragraph:
      'It is a vulgar, but still a useful help towards contempt of death,\nto pass in review those who have tenaciously stuck to life. What more\nthen have they gained than those who have died early? Certainly they\nlie in their tombs somewhere at last, Cadicianus, Fabius, Julianus,\nLepidus, or any one else like them, who have carried out many to be\nburied, and then were carried out themselves. Altogether the interval\nis small between birth and death; and consider with how much trouble,\nand in company with what sort of people and in what a feeble body\nthis interval is laboriously passed. Do not then consider life a thing\nof any value. For look to the immensity of time behind thee, and to\nthe time which is before thee, another boundless space. In this infinity\nthen what is the difference between him who lives three days and him\nwho lives three generations? ',
  },
  {
    book: 'Book Four',
    paragraph:
      'Always run to the short way; and the short way is the natural: accordingly\nsay and do everything in conformity with the soundest reason. For\nsuch a purpose frees a man from trouble, and warfare, and all artifice\nand ostentatious display. ',
  },
  {
    book: 'Book Five',
    paragraph:
      'In he morning when thou risest unwillingly, let this thought be present-\nI am rising to the work of a human being. Why then am I dissatisfied\nif I am going to do the things for which I exist and for which I was\nbrought into the world? Or have I been made for this, to lie in the\nbed-clothes and keep myself warm?- But this is more pleasant.- Dost\nthou exist then to take thy pleasure, and not at all for action or\nexertion? Dost thou not see the little plants, the little birds, the\nants, the spiders, the bees working together to put in order their\nseveral parts of the universe? And art thou unwilling to do the work\nof a human being, and dost thou not make haste to do that which is\naccording to thy nature?- But it is necessary to take rest also.-\nIt is necessary: however nature has fixed bounds to this too: she\nhas fixed bounds both to eating and drinking, and yet thou goest beyond\nthese bounds, beyond what is sufficient; yet in thy acts it is not\nso, but thou stoppest short of what thou canst do. So thou lovest\nnot thyself, for if thou didst, thou wouldst love thy nature and her\nwill. But those who love their several arts exhaust themselves in\nworking at them unwashed and without food; but thou valuest thy own\nown nature less than the turner values the turning art, or the dancer\nthe dancing art, or the lover of money values his money, or the vainglorious\nman his little glory. And such men, when they have a violent affection\nto a thing, choose neither to eat nor to sleep rather than to perfect\nthe things which they care for. But are the acts which concern society\nmore vile in thy eyes and less worthy of thy labour? ',
  },
  {
    book: 'Book Five',
    paragraph:
      'How easy it is to repel and to wipe away every impression which is\ntroublesome or unsuitable, and immediately to be in all tranquility.',
  },
  {
    book: 'Book Five',
    paragraph:
      'Judge every word and deed which are according to nature to be fit\nfor thee; and be not diverted by the blame which follows from any\npeople nor by their words, but if a thing is good to be done or said,\ndo not consider it unworthy of thee. For those persons have their\npeculiar leading principle and follow their peculiar movement; which\nthings do not thou regard, but go straight on, following thy own nature\nand the common nature; and the way of both is one. ',
  },
  {
    book: 'Book Five',
    paragraph:
      'I go through the things which happen according to nature until I shall\nfall and rest, breathing out my breath into that element out of which\nI daily draw it in, and falling upon that earth out of which my father\ncollected the seed, and my mother the blood, and my nurse the milk;\nout of which during so many years I have been supplied with food and\ndrink; which bears me when I tread on it and abuse it for so many\npurposes. ',
  },
  {
    book: 'Book Five',
    paragraph:
      'Thou sayest, Men cannot admire the sharpness of thy wits.- Be it so:\nbut there are many other things of which thou canst not say, I am\nnot formed for them by nature. Show those qualities then which are\naltogether in thy power, sincerity, gravity, endurance of labour,\naversion to pleasure, contentment with thy portion and with few things,\nbenevolence, frankness, no love of superfluity, freedom from trifling\nmagnanimity. Dost thou not see how many qualities thou art immediately\nable to exhibit, in which there is no excuse of natural incapacity\nand unfitness, and yet thou still remainest voluntarily below the\nmark? Or art thou compelled through being defectively furnished by\nnature to murmur, and to be stingy, and to flatter, and to find fault\nwith thy poor body, and to try to please men, and to make great display,\nand to be so restless in thy mind? No, by the gods: but thou mightest\nhave been delivered from these things long ago. Only if in truth thou\ncanst be charged with being rather slow and dull of comprehension,\nthou must exert thyself about this also, not neglecting it nor yet\ntaking pleasure in thy dulness. ',
  },
  {
    book: 'Book Five',
    paragraph:
      'One man, when he has done a service to another, is ready to set it\ndown to his account as a favour conferred. Another is not ready to\ndo this, but still in his own mind he thinks of the man as his debtor,\nand he knows what he has done. A third in a manner does not even know\nwhat he has done, but he is like a vine which has produced grapes,\nand seeks for nothing more after it has once produced its proper fruit.\nAs a horse when he has run, a dog when he has tracked the game, a\nbee when it has made the honey, so a man when he has done a good act,\ndoes not call out for others to come and see, but he goes on to another\nact, as a vine goes on to produce again the grapes in season.- Must\na man then be one of these, who in a manner act thus without observing\nit?- Yes.- But this very thing is necessary, the observation of what\na man is doing: for, it may be said, it is characteristic of the social\nanimal to perceive that he is working in a social manner, and indeed\nto wish that his social partner also should perceive it.- It is true\nwhat thou sayest, but thou dost not rightly understand what is now\nsaid: and for this reason thou wilt become one of those of whom I\nspoke before, for even they are misled by a certain show of reason.\nBut if thou wilt choose to understand the meaning of what is said,\ndo not fear that for this reason thou wilt omit any social act.',
  },
  {
    book: 'Book Five',
    paragraph:
      'A prayer of the Athenians: Rain, rain, O dear Zeus, down on the ploughed\nfields of the Athenians and on the plains.- In truth we ought not\nto pray at all, or we ought to pray in this simple and noble fashion.',
  },
  {
    book: 'Book Five',
    paragraph:
      'Just as we must understand when it is said, That Aesculapius prescribed\nto this man horse-exercise, or bathing in cold water or going without\nshoes; so we must understand it when it is said, That the nature of\nthe universe prescribed to this man disease or mutilation or loss\nor anything else of the kind. For in the first case Prescribed means\nsomething like this: he prescribed this for this man as a thing adapted\nto procure health; and in the second case it means: That which happens\nto (or, suits) every man is fixed in a manner for him suitably to\nhis destiny. For this is what we mean when we say that things are\nsuitable to us, as the workmen say of squared stones in walls or the\npyramids, that they are suitable, when they fit them to one another\nin some kind of connexion. For there is altogether one fitness, harmony.\nAnd as the universe is made up out of all bodies to be such a body\nas it is, so out of all existing causes necessity (destiny) is made\nup to be such a cause as it is. And even those who are completely\nignorant understand what I mean, for they say, It (necessity, destiny)\nbrought this to such a person.- This then was brought and this was\nprecribed to him. Let us then receive these things, as well as those\nwhich Aesculapius prescribes. Many as a matter of course even among\nhis prescriptions are disagreeable, but we accept them in the hope\nof health. Let the perfecting and accomplishment of the things, which\nthe common nature judges to be good, be judged by thee to be of the\nsame kind as thy health. And so accept everything which happens, even\nif it seem disagreeable, because it leads to this, to the health of\nthe universe and to the prosperity and felicity of Zeus (the universe).\nFor he would not have brought on any man what he has brought, if it\nwere not useful for the whole. Neither does the nature of anything,\nwhatever it may be, cause anything which is not suitable to that which\nis directed by it. For two reasons then it is right to be content\nwith that which happens to thee; the one, because it was done for\nthee and prescribed for thee, and in a manner had reference to thee,\noriginally from the most ancient causes spun with thy destiny; and\nthe other, because even that which comes severally to every man is\nto the power which administers the universe a cause of felicity and\nperfection, nay even of its very continuance. For the integrity of\nthe whole is mutilated, if thou cuttest off anything whatever from\nthe conjunction and the continuity either of the parts or of the causes.\nAnd thou dost cut off, as far as it is in thy power, when thou art\ndissatisfied, and in a manner triest to put anything out of the way.',
  },
  {
    book: 'Book Five',
    paragraph:
      "Be not disgusted, nor discouraged, nor dissatisfied, if thou dost\nnot succeed in doing everything according to right principles; but\nwhen thou bast failed, return back again, and be content if the greater\npart of what thou doest is consistent with man's nature, and love\nthis to which thou returnest; and do not return to philosophy as if\nshe were a master, but act like those who have sore eyes and apply\na bit of sponge and egg, or as another applies a plaster, or drenching\nwith water. For thus thou wilt not fail to obey reason, and thou wilt\nrepose in it. And remember that philosophy requires only the things\nwhich thy nature requires; but thou wouldst have something else which\nis not according to nature.- It may be objected, Why what is more\nagreeable than this which I am doing?- But is not this the very reason\nwhy pleasure deceives us? And consider if magnanimity, freedom, simplicity,\nequanimity, piety, are not more agreeable. For what is more agreeable\nthan wisdom itself, when thou thinkest of the security and the happy\ncourse of all things which depend on the faculty of understanding\nand knowledge? ",
  },
  {
    book: 'Book Five',
    paragraph:
      "Things are in such a kind of envelopment that they have seemed to\nphilosophers, not a few nor those common philosophers, altogether\nunintelligible; nay even to the Stoics themselves they seem difficult\nto understand. And all our assent is changeable; for where is the\nman who never changes? Carry thy thoughts then to the objects themselves,\nand consider how short-lived they are and worthless, and that they\nmay be in the possession of a filthy wretch or a whore or a robber.\nThen turn to the morals of those who live with thee, and it is hardly\npossible to endure even the most agreeable of them, to say nothing\nof a man being hardly able to endure himself. In such darkness then\nand dirt and in so constant a flux both of substance and of time,\nand of motion and of things moved, what there is worth being highly\nprized or even an object of serious pursuit, I cannot imagine. But\non the contrary it is a man's duty to comfort himself, and to wait\nfor the ",
  },
  {
    book: 'Book Five',
    paragraph:
      'natural dissolution and not to be vexed at the delay, but to rest\nin these principles only: the one, that nothing will happen to me\nwhich is not conformable to the nature of the universe; and the other,\nthat it is in my power never to act contrary to my god and daemon:\nfor there is no man who will compel me to this. ',
  },
  {
    book: 'Book Five',
    paragraph:
      'About what am I now employing my own soul? On every occasion I must\nask myself this question, and inquire, what have I now in this part\nof me which they call the ruling principle? And whose soul have I\nnow? That of a child, or of a young man, or of a feeble woman, or\nof a tyrant, or of a domestic animal, or of a wild beast?',
  },
  {
    book: 'Book Five',
    paragraph:
      'What kind of things those are which appear good to the many, we may\nlearn even from this. For if any man should conceive certain things\nas being really good, such as prudence, temperance, justice, fortitude,\nhe would not after having first conceived these endure to listen to\nanything which should not be in harmony with what is really good.\nBut if a man has first conceived as good the things which appear to\nthe many to be good, he will listen and readily receive as very applicable\nthat which was said by the comic writer. Thus even the many perceive\nthe difference. For were it not so, this saying would not offend and\nwould not be rejected in the first case, while we receive it when\nit is said of wealth, and of the means which further luxury and fame,\nas said fitly and wittily. Go on then and ask if we should value and\nthink those things to be good, to which after their first conception\nin the mind the words of the comic writer might be aptly applied-\nthat he who has them, through pure abundance has not a place to ease\nhimself in. ',
  },
  {
    book: 'Book Five',
    paragraph:
      'I am composed of the formal and the material; and neither of them\nwill perish into non-existence, as neither of them came into existence\nout of non-existence. Every part of me then will be reduced by change\ninto some part of the universe, and that again will change into another\npart of the universe, and so on for ever. And by consequence of such\na change I too exist, and those who begot me, and so on for ever in\nthe other direction. For nothing hinders us from saying so, even if\nthe universe is administered according to definite periods of revolution.',
  },
  {
    book: 'Book Five',
    paragraph:
      'Reason and the reasoning art (philosophy) are powers which are sufficient\nfor themselves and for their own works. They move then from a first\nprinciple which is their own, and they make their way to the end which\nis proposed to them; and this is the reason why such acts are named\ncatorthoseis or right acts, which word signifies that they proceed\nby the right road. ',
  },
  {
    book: 'Book Five',
    paragraph:
      "None of these things ought to be called a man's, which do not belong\nto a man, as man. They are not required of a man, nor does man's nature\npromise them, nor are they the means of man's nature attaining its\nend. Neither then does the end of man lie in these things, nor yet\nthat which aids to the accomplishment of this end, and that which\naids towards this end is that which is good. Besides, if any of these\nthings did belong to man, it would not be right for a man to despise\nthem and to set himself against them; nor would a man be worthy of\npraise who showed that he did not want these things, nor would he\nwho stinted himself in any of them be good, if indeed these things\nwere good. But now the more of these things a man deprives himself\nof, or of other things like them, or even when he is deprived of any\nof them, the more patiently he endures the loss, just in the same\ndegree he is a better man. ",
  },
  {
    book: 'Book Five',
    paragraph:
      'Such as are thy habitual thoughts, such also will be the character\nof thy mind; for the soul is dyed by the thoughts. Dye it then with\na continuous series of such thoughts as these: for instance, that\nwhere a man can live, there he can also live well. But he must live\nin a palace;- well then, he can also live well in a palace. And again,\nconsider that for whatever purpose each thing has been constituted,\nfor this it has been constituted, and towards this it is carried;\nand its end is in that towards which it is carried; and where the\nend is, there also is the advantage and the good of each thing. Now\nthe good for the reasonable animal is society; for that we are made\nfor society has been shown above. Is it not plain that the inferior\nexist for the sake of the superior? But the things which have life\nare superior to those which have not life, and of those which have\nlife the superior are those which have reason. ',
  },
  {
    book: 'Book Five',
    paragraph:
      'To seek what is impossible is madness: and it is impossible that the\nbad should not do something of this kind. ',
  },
  {
    book: 'Book Five',
    paragraph:
      'Nothing happens to any man which he is not formed by nature to bear.\nThe same things happen to another, and either because he does not\nsee that they have happened or because he would show a great spirit\nhe is firm and remains unharmed. It is a shame then that ignorance\nand conceit should be stronger than wisdom. ',
  },
  {
    book: 'Book Five',
    paragraph:
      'Things themselves touch not the soul, not in the least degree; nor\nhave they admission to the soul, nor can they turn or move the soul:\nbut the soul turns and moves itself alone, and whatever judgements\nit may think proper to make, such it makes for itself the things which\npresent themselves to it. ',
  },
  {
    book: 'Book Five',
    paragraph:
      'In one respect man is the nearest thing to me, so far as I must do\ngood to men and endure them. But so far as some men make themselves\nobstacles to my proper acts, man becomes to me one of the things which\nare indifferent, no less than the sun or wind or a wild beast. Now\nit is true that these may impede my action, but they are no impediments\nto my affects and disposition, which have the power of acting conditionally\nand changing: for the mind converts and changes every hindrance to\nits activity into an aid; and so that which is a hindrance is made\na furtherance to an act; and that which is an obstacle on the road\nhelps us on this road. ',
  },
  {
    book: 'Book Five',
    paragraph:
      'Reverence that which is best in the universe; and this is that which\nmakes use of all things and directs all things. And in like manner\nalso reverence that which is best in thyself; and this is of the same\nkind as that. For in thyself also, that which makes use of everything\nelse, is this, and thy life is directed by this. ',
  },
  {
    book: 'Book Five',
    paragraph:
      'That which does no harm to the state, does no harm to the citizen.\nIn the case of every appearance of harm apply this rule: if the state\nis not harmed by this, neither am I harmed. But if the state is harmed,\nthou must not be angry with him who does harm to the state. Show him\nwhere his error is. ',
  },
  {
    book: 'Book Five',
    paragraph:
      'Often think of the rapidity with which things pass by and disappear,\nboth the things which are and the things which are produced. For substance\nis like a river in a continual flow, and the activities of things\nare in constant change, and the causes work in infinite varieties;\nand there is hardly anything which stands still. And consider this\nwhich is near to thee, this boundless abyss of the past and of the\nfuture in which all things disappear. How then is he not a fool who\nis puffed up with such things or plagued about them and makes himself\nmiserable? for they vex him only for a time, and a short time.',
  },
  {
    book: 'Book Five',
    paragraph:
      'Think of the universal substance, of which thou hast a very small\nportion; and of universal time, of which a short and indivisible interval\nhas been assigned to thee; and of that which is fixed by destiny,\nand how small a part of it thou art. ',
  },
  {
    book: 'Book Five',
    paragraph:
      'Does another do me wrong? Let him look to it. He has his own disposition,\nhis own activity. I now have what the universal nature wills me to\nhave; and I do what my nature now wills me to do. ',
  },
  {
    book: 'Book Five',
    paragraph:
      'Let the part of thy soul which leads and governs be undisturbed by\nthe movements in the flesh, whether of pleasure or of pain; and let\nit not unite with them, but let it circumscribe itself and limit those\naffects to their parts. But when these affects rise up to the mind\nby virtue of that other sympathy that naturally exists in a body which\nis all one, then thou must not strive to resist the sensation, for\nit is natural: but let not the ruling part of itself add to the sensation\nthe opinion that it is either good or bad. ',
  },
  {
    book: 'Book Five',
    paragraph:
      "Live with the gods. And he does live with the gods who constantly\nshows to them, his own soul is satisfied with that which is assigned\nto him, and that it does all that the daemon wishes, which Zeus hath\ngiven to every man for his guardian and guide, a portion of himself.\nAnd this is every man's understanding and reason. ",
  },
  {
    book: 'Book Five',
    paragraph:
      'Art thou angry with him whose armpits stink? Art thou angry with him\nwhose mouth smells foul? What good will this danger do thee? He has\nsuch a mouth, he has such arm-pits: it is necessary that such an emanation\nmust come from such things- but the man has reason, it will be said,\nand he is able, if he takes pain, to discover wherein he offends-\nI wish thee well of thy discovery. Well then, and thou hast reason:\nby thy rational faculty stir up his rational faculty; show him his\nerror, admonish him. For if he listens, thou wilt cure him, and there\nis no need of anger. Neither tragic actor nor whore... ',
  },
  {
    book: 'Book Five',
    paragraph:
      'As thou intendest to live when thou art gone out,...so it is in thy\npower to live here. But if men do not permit thee, then get away out\nof life, yet so as if thou wert suffering no harm. The house is smoky,\nand I quit it. Why dost thou think that this is any trouble? But so\nlong as nothing of the kind drives me out, I remain, am free, and\nno man shall hinder me from doing what I choose; and I choose to do\nwhat is according to the nature of the rational and social animal.',
  },
  {
    book: 'Book Five',
    paragraph:
      'The intelligence of the universe is social. Accordingly it has made\nthe inferior things for the sake of the superior, and it has fitted\nthe superior to one another. Thou seest how it has subordinated, co-ordinated\nand assigned to everything its proper portion, and has brought together\ninto concord with one another the things which are the best.',
  },
  {
    book: 'Book Five',
    paragraph:
      'How hast thou behaved hitherto to the gods, thy parents, brethren,\nchildren, teachers, to those who looked after thy infancy, to thy\nfriends, kinsfolk, to thy slaves? Consider if thou hast hitherto behaved\nto all in such a way that this may be said of thee: ',
  },
  {
    book: 'Book Five',
    paragraph:
      'Never has wronged a man in deed or word. And call to recollection\nboth how many things thou hast passed through, and how many things\nthou hast been able to endure: and that the history of thy life is\nnow complete and thy service is ended: and how many beautiful things\nthou hast seen: and how many pleasures and pains thou hast despised;\nand how many things called honourable thou hast spurned; and to how\nmany ill-minded folks thou hast shown a kind disposition.',
  },
  {
    book: 'Book Five',
    paragraph:
      'Why do unskilled and ignorant souls disturb him who has skill and\nknowledge? What soul then has skill and knowledge? That which knows\nbeginning and end, and knows the reason which pervades all substance\nand through all time by fixed periods (revolutions) administers the\nuniverse. ',
  },
  {
    book: 'Book Five',
    paragraph:
      'Soon, very soon, thou wilt be ashes, or a skeleton, and either a name\nor not even a name; but name is sound and echo. And the things which\nare much valued in life are empty and rotten and trifling, and like\nlittle dogs biting one another, and little children quarrelling, laughing,\nand then straightway weeping. But fidelity and modesty and justice\nand truth are fled ',
  },
  {
    book: 'Book Five',
    paragraph:
      'Up to Olympus from the wide-spread earth. What then is there which\nstill detains thee here? If the objects of sense are easily changed\nand never stand still, and the organs of perception are dull and easily\nreceive false impressions; and the poor soul itself is an exhalation\nfrom blood. But to have good repute amidst such a world as this is\nan empty thing. Why then dost thou not wait in tranquility for thy\nend, whether it is extinction or removal to another state? And until\nthat time comes, what is sufficient? Why, what else than to venerate\nthe gods and bless them, and to do good to men, and to practise tolerance\nand self-restraint; but as to everything which is beyond the limits\nof the poor flesh and breath, to remember that this is neither thine\nnor in thy power. ',
  },
  {
    book: 'Book Five',
    paragraph:
      'Thou canst pass thy life in an equable flow of happiness, if thou\ncanst go by the right way, and think and act in the right way. These\ntwo things are common both to the soul of God and to the soul of man,\nand to the soul of every rational being, not to be hindered by another;\nand to hold good to consist in the disposition to justice and the\npractice of it, and in this to let thy desire find its termination.',
  },
  {
    book: 'Book Five',
    paragraph:
      'If this is neither my own badness, nor an effect of my own badness,\nand the common weal is not injured, why am I troubled about it? And\nwhat is the harm to the common weal? ',
  },
  {
    book: 'Book Five',
    paragraph:
      "Do not be carried along inconsiderately by the appearance of things,\nbut give help to all according to thy ability and their fitness; and\nif they should have sustained loss in matters which are indifferent,\ndo not imagine this to be a damage. For it is a bad habit. But as\nthe old man, when he went away, asked back his foster-child's top,\nremembering that it was a top, so do thou in this case also.",
  },
  {
    book: 'Book Five',
    paragraph:
      'When thou art calling out on the Rostra, hast thou forgotten, man,\nwhat these things are?- Yes; but they are objects of great concern\nto these people- wilt thou too then be made a fool for these things?-\nI was once a fortunate man, but I lost it, I know not how.- But fortunate\nmeans that a man has assigned to himself a good fortune: and a good\nfortune is good disposition of the soul, good emotions, good actions.',
  },
  {
    book: 'Book Six',
    paragraph:
      'The substance of the universe is obedient and compliant; and the\nreason which governs it has in itself no cause for doing evil, for\nit has no malice, nor does it do evil to anything, nor is anything\nharmed by it. But all things are made and perfected according to this\nreason. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'Let it make no difference to thee whether thou art cold or warm, if\nthou art doing thy duty; and whether thou art drowsy or satisfied\nwith sleep; and whether ill-spoken of or praised; and whether dying\nor doing something else. For it is one of the acts of life, this act\nby which we die: it is sufficient then in this act also to do well\nwhat we have in hand. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'Look within. Let neither the peculiar quality of anything nor its\nvalue escape thee. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'All existing things soon change, and they will either be reduced to\nvapour, if indeed all substance is one, or they will be dispersed.',
  },
  {
    book: 'Book Six',
    paragraph:
      'The reason which governs knows what its own disposition is, and what\nit does, and on what material it works. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'The best way of avenging thyself is not to become like the wrong doer.',
  },
  {
    book: 'Book Six',
    paragraph:
      'Take pleasure in one thing and rest in it, in passing from one social\nact to another social act, thinking of God. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'The ruling principle is that which rouses and turns itself, and while\nit makes itself such as it is and such as it wills to be, it also\nmakes everything which happens appear to itself to be such as it wills.',
  },
  {
    book: 'Book Six',
    paragraph:
      'In conformity to the nature of the universe every single thing is\naccomplished, for certainly it is not in conformity to any other nature\nthat each thing is accomplished, either a nature which externally\ncomprehends this, or a nature which is comprehended within this nature,\nor a nature external and independent of this. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'The universe is either a confusion, and a mutual involution of things,\nand a dispersion; or it is unity and order and providence. If then\nit is the former, why do I desire to tarry in a fortuitous combination\nof things and such a disorder? And why do I care about anything else\nthan how I shall at last become earth? And why am I disturbed, for\nthe dispersion of my elements will happen whatever I do. But if the\nother supposition is true, I venerate, and I am firm, and I trust\nin him who governs. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'When thou hast been compelled by circumstances to be disturbed in\na manner, quickly return to thyself and do not continue out of tune\nlonger than the compulsion lasts; for thou wilt have more mastery\nover the harmony by continually recurring to it. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'If thou hadst a step-mother and a mother at the same time, thou wouldst\nbe dutiful to thy step-mother, but still thou wouldst constantly return\nto thy mother. Let the court and philosophy now be to thee step-mother\nand mother: return to philosophy frequently and repose in her, through\nwhom what thou meetest with in the court appears to thee tolerable,\nand thou appearest tolerable in the court. ',
  },
  {
    book: 'Book Six',
    paragraph:
      "When we have meat before us and such eatables we receive the impression,\nthat this is the dead body of a fish, and this is the dead body of\na bird or of a pig; and again, that this Falernian is only a little\ngrape juice, and this purple robe some sheep's wool dyed with the\nblood of a shell-fish: such then are these impressions, and they reach\nthe things themselves and penetrate them, and so we see what kind\nof things they are. Just in the same way ought we to act all through\nlife, and where there are things which appear most worthy of our approbation,\nwe ought to lay them bare and look at their worthlessness and strip\nthem of all the words by which they are exalted. For outward show\nis a wonderful perverter of the reason, and when thou art most sure\nthat thou art employed about things worth thy pains, it is then that\nit cheats thee most. Consider then what Crates says of Xenocrates\nhimself. ",
  },
  {
    book: 'Book Six',
    paragraph:
      'Most of the things which the multitude admire are referred to objects\nof the most general kind, those which are held together by cohesion\nor natural organization, such as stones, wood, fig-trees, vines, olives.\nBut those which are admired by men who are a little more reasonable\nare referred to the things which are held together by a living principle,\nas flocks, herds. Those which are admired by men who are still more\ninstructed are the things which are held together by a rational soul,\nnot however a universal soul, but rational so far as it is a soul\nskilled in some art, or expert in some other way, or simply rational\nso far as it possesses a number of slaves. But he who values rational\nsoul, a soul universal and fitted for political life, regards nothing\nelse except this; and above all things he keeps his soul in a condition\nand in an activity conformable to reason and social life, and he co-operates\nto this end with those who are of the same kind as himself.',
  },
  {
    book: 'Book Six',
    paragraph:
      'Some things are hurrying into existence, and others are hurrying out\nof it; and of that which is coming into existence part is already\nextinguished. Motions and changes are continually renewing the world,\njust as the uninterrupted course of time is always renewing the infinite\nduration of ages. In this flowing stream then, on which there is no\nabiding, what is there of the things which hurry by on which a man\nwould set a high price? It would be just as if a man should fall in\nlove with one of the sparrows which fly by, but it has already passed\nout of sight. Something of this kind is the very life of every man,\nlike the exhalation of the blood and the respiration of the air. For\nsuch as it is to have once drawn in the air and to have given it back,\nwhich we do every moment, just the same is it with the whole respiratory\npower, which thou didst receive at thy birth yesterday and the day\nbefore, to give it back to the element from which thou didst first\ndraw it. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'Neither is transpiration, as in plants, a thing to be valued, nor\nrespiration, as in domesticated animals and wild beasts, nor the receiving\nof impressions by the appearances of things, nor being moved by desires\nas puppets by strings, nor assembling in herds, nor being nourished\nby food; for this is just like the act of separating and parting with\nthe useless part of our food. What then is worth being valued? To\nbe received with clapping of hands? No. Neither must we value the\nclapping of tongues, for the praise which comes from the many is a\nclapping of tongues. Suppose then that thou hast given up this worthless\nthing called fame, what remains that is worth valuing? This in my\nopinion, to move thyself and to restrain thyself in conformity to\nthy proper constitution, to which end both all employments and arts\nlead. For every art aims at this, that the thing which has been made\nshould be adapted to the work for which it has been made; and both\nthe vine-planter who looks after the vine, and the horse-breaker,\nand he who trains the dog, seek this end. But the education and the\nteaching of youth aim at something. In this then is the value of the\neducation and the teaching. And if this is well, thou wilt not seek\nanything else. Wilt thou not cease to value many other things too?\nThen thou wilt be neither free, nor sufficient for thy own happiness,\nnor without passion. For of necessity thou must be envious, jealous,\nand suspicious of those who can take away those things, and plot against\nthose who have that which is valued by thee. Of necessity a man must\nbe altogether in a state of perturbation who wants any of these things;\nand besides, he must often find fault with the gods. But to reverence\nand honour thy own mind will make thee content with thyself, and in\nharmony with society, and in agreement with the gods, that is, praising\nall that they give and have ordered. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'Above, below, all around are the movements of the elements. But the\nmotion of virtue is in none of these: it is something more divine,\nand advancing by a way hardly observed it goes happily on its road.',
  },
  {
    book: 'Book Six',
    paragraph:
      'How strangely men act. They will not praise those who are living at\nthe same time and living with themselves; but to be themselves praised\nby posterity, by those whom they have never seen or ever will see,\nthis they set much value on. But this is very much the same as if\nthou shouldst be grieved because those who have lived before thee\ndid not praise thee. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'If a thing is difficult to be accomplished by thyself, do not think\nthat it is impossible for man: but if anything is possible for man\nand conformable to his nature, think that this can be attained by\nthyself too. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'In the gymnastic exercises suppose that a man has torn thee with his\nnails, and by dashing against thy head has inflicted a wound. Well,\nwe neither show any signs of vexation, nor are we offended, nor do\nwe suspect him afterwards as a treacherous fellow; and yet we are\non our guard against him, not however as an enemy, nor yet with suspicion,\nbut we quietly get out of his way. Something like this let thy behaviour\nbe in all the other parts of life; let us overlook many things in\nthose who are like antagonists in the gymnasium. For it is in our\npower, as I said, to get out of the way, and to have no suspicion\nnor hatred. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'If any man is able to convince me and show me that I do not think\nor act right, I will gladly change; for I seek the truth by which\nno man was ever injured. But he is injured who abides in his error\nand ignorance. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'I do my duty: other things trouble me not; for they are either things\nwithout life, or things without reason, or things that have rambled\nand know not the way. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'As to the animals which have no reason and generally all things and\nobjects, do thou, since thou hast reason and they have none, make\nuse of them with a generous and liberal spirit. But towards human\nbeings, as they have reason, behave in a social spirit. And on all\noccasions call on the gods, and do not perplex thyself about the length\nof time in which thou shalt do this; for even three hours so spent\nare sufficient. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'Alexander the Macedonian and his groom by death were brought to the\nsame state; for either they were received among the same seminal principles\nof the universe, or they were alike dispersed among the atoms.',
  },
  {
    book: 'Book Six',
    paragraph:
      'Consider how many things in the same indivisible time take place in\neach of us, things which concern the body and things which concern\nthe soul: and so thou wilt not wonder if many more things, or rather\nall things which come into existence in that which is the one and\nall, which we call Cosmos, exist in it at the same time.',
  },
  {
    book: 'Book Six',
    paragraph:
      'If any man should propose to thee the question, how the name Antoninus\nis written, wouldst thou with a straining of the voice utter each\nletter? What then if they grow angry, wilt thou be angry too? Wilt\nthou not go on with composure and number every letter? just so then\nin this life also remember that every duty is made up of certain parts.\nThese it is thy duty to observe and without being disturbed or showing\nanger towards those who are angry with thee to go on thy way and finish\nthat which is set before thee. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'How cruel it is not to allow men to strive after the things which\nappear to them to be suitable to their nature and profitable! And\nyet in a manner thou dost not allow them to do this, when thou art\nvexed because they do wrong. For they are certainly moved towards\nthings because they suppose them to be suitable to their nature and\nprofitable to them.- But it is not so.- Teach them then, and show\nthem without being angry. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'Death is a cessation of the impressions through the senses, and of\nthe pulling of the strings which move the appetites, and of the discursive\nmovements of the thoughts, and of the service to the flesh.',
  },
  {
    book: 'Book Six',
    paragraph:
      'It is a shame for the soul to be first to give way in this life, when\nthy body does not give way. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'Take care that thou art not made into a Caesar, that thou art not\ndyed with this dye; for such things happen. Keep thyself then simple,\ngood, pure, serious, free from affectation, a friend of justice, a\nworshipper of the gods, kind, affectionate, strenuous in all proper\nacts. Strive to continue to be such as philosophy wished to make thee.\nReverence the gods, and help men. Short is life. There is only one\nfruit of this terrene life, a pious disposition and social acts. Do\neverything as a disciple of Antoninus. Remember his constancy in every\nact which was conformable to reason, and his evenness in all things,\nand his piety, and the serenity of his countenance, and his sweetness,\nand his disregard of empty fame, and his efforts to understand things;\nand how he would never let anything pass without having first most\ncarefully examined it and clearly understood it; and how he bore with\nthose who blamed him unjustly without blaming them in return; how\nhe did nothing in a hurry; and how he listened not to calumnies, and\nhow exact an examiner of manners and actions he was; and not given\nto reproach people, nor timid, nor suspicious, nor a sophist; and\nwith how little he was satisfied, such as lodging, bed, dress, food,\nservants; and how laborious and patient; and how he was able on account\nof his sparing diet to hold out to the evening, not even requiring\nto relieve himself by any evacuations except at the usual hour; and\nhis firmness and uniformity in his friendships; and how he tolerated\nfreedom of speech in those who opposed his opinions; and the pleasure\nthat he had when any man showed him anything better; and how religious\nhe was without superstition. Imitate all this that thou mayest have\nas good a conscience, when thy last hour comes, as he had.',
  },
  {
    book: 'Book Six',
    paragraph:
      'Return to thy sober senses and call thyself back; and when thou hast\nroused thyself from sleep and hast perceived that they were only dreams\nwhich troubled thee, now in thy waking hours look at these (the things\nabout thee) as thou didst look at those (the dreams). ',
  },
  {
    book: 'Book Six',
    paragraph:
      'I consist of a little body and a soul. Now to this little body all\nthings are indifferent, for it is not able to perceive differences.\nBut to the understanding those things only are indifferent, which\nare not the works of its own activity. But whatever things are the\nworks of its own activity, all these are in its power. And of these\nhowever only those which are done with reference to the present; for\nas to the future and the past activities of the mind, even these are\nfor the present indifferent. ',
  },
  {
    book: 'Book Six',
    paragraph:
      "Neither the labour which the hand does nor that of the foot is contrary\nto nature, so long as the foot does the foot's work and the hand the\nhand's. So then neither to a man as a man is his labour contrary to\nnature, so long as it does the things of a man. But if the labour\nis not contrary to his nature, neither is it an evil to him.",
  },
  {
    book: 'Book Six',
    paragraph:
      'How many pleasures have been enjoyed by robbers, patricides, tyrants.',
  },
  {
    book: 'Book Six',
    paragraph:
      'Dost thou not see how the handicraftsmen accommodate themselves up\nto a certain point to those who are not skilled in their craft- nevertheless\nthey cling to the reason (the principles) of their art and do not\nendure to depart from it? Is it not strange if the architect and the\nphysician shall have more respect to the reason (the principles) of\ntheir own arts than man to his own reason, which is common to him\nand the gods? ',
  },
  {
    book: 'Book Six',
    paragraph:
      "Asia, Europe are corners of the universe: all the sea a drop in the\nuniverse; Athos a little clod of the universe: all the present time\nis a point in eternity. All things are little, changeable, perishable.\nAll things come from thence, from that universal ruling power either\ndirectly proceeding or by way of sequence. And accordingly the lion's\ngaping jaws, and that which is poisonous, and every harmful thing,\nas a thorn, as mud, are after-products of the grand and beautiful.\nDo not then imagine that they are of another kind from that which\nthou dost venerate, but form a just opinion of the source of all.",
  },
  {
    book: 'Book Six',
    paragraph:
      'He who has seen present things has seen all, both everything which\nhas taken place from all eternity and everything which will be for\ntime without end; for all things are of one kin and of one form.',
  },
  {
    book: 'Book Six',
    paragraph:
      'Frequently consider the connexion of all things in the universe and\ntheir relation to one another. For in a manner all things are implicated\nwith one another, and all in this way are friendly to one another;\nfor one thing comes in order after another, and this is by virtue\nof the active movement and mutual conspiration and the unity of the\nsubstance. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'Adapt thyself to the things with which thy lot has been cast: and\nthe men among whom thou hast received thy portion, love them, but\ndo it truly, sincerely. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'Every instrument, tool, vessel, if it does that for which it has been\nmade, is well, and yet he who made it is not there. But in the things\nwhich are held together by nature there is within and there abides\nin them the power which made them; wherefore the more is it fit to\nreverence this power, and to think, that, if thou dost live and act\naccording to its will, everything in thee is in conformity to intelligence.\nAnd thus also in the universe the things which belong to it are in\nconformity to intelligence. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'Whatever of the things which are not within thy power thou shalt suppose\nto be good for thee or evil, it must of necessity be that, if such\na bad thing befall thee or the loss of such a good thing, thou wilt\nblame the gods, and hate men too, those who are the cause of the misfortune\nor the loss, or those who are suspected of being likely to be the\ncause; and indeed we do much injustice, because we make a difference\nbetween these things. But if we judge only those things which are\nin our power to be good or bad, there remains no reason either for\nfinding fault with God or standing in a hostile attitude to man.',
  },
  {
    book: 'Book Six',
    paragraph:
      'We are all working together to one end, some with knowledge and design,\nand others without knowing what they do; as men also when they are\nasleep, of whom it is Heraclitus, I think, who says that they are\nlabourers and co-operators in the things which take place in the universe.\nBut men co-operate after different fashions: and even those co-operate\nabundantly, who find fault with what happens and those who try to\noppose it and to hinder it; for the universe had need even of such\nmen as these. It remains then for thee to understand among what kind\nof workmen thou placest thyself; for he who rules all things will\ncertainly make a right use of thee, and he will receive thee among\nsome part of the co-operators and of those whose labours conduce to\none end. But be not thou such a part as the mean and ridiculous verse\nin the play, which Chrysippus speaks of. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'Does the sun undertake to do the work of the rain, or Aesculapius\nthe work of the Fruit-bearer (the earth)? And how is it with respect\nto each of the stars, are they not different and yet they work together\nto the same end? ',
  },
  {
    book: 'Book Six',
    paragraph:
      'If the gods have determined about me and about the things which must\nhappen to me, they have determined well, for it is not easy even to\nimagine a deity without forethought; and as to doing me harm, why\nshould they have any desire towards that? For what advantage would\nresult to them from this or to the whole, which is the special object\nof their providence? But if they have not determined about me individually,\nthey have certainly determined about the whole at least, and the things\nwhich happen by way of sequence in this general arrangement I ought\nto accept with pleasure and to be content with them. But if they determine\nabout nothing- which it is wicked to believe, or if we do believe\nit, let us neither sacrifice nor pray nor swear by them nor do anything\nelse which we do as if the gods were present and lived with us- but\nif however the gods determine about none of the things which concern\nus, I am able to determine about myself, and I can inquire about that\nwhich is useful; and that is useful to every man which is conformable\nto his own constitution and nature. But my nature is rational and\nsocial; and my city and country, so far as I am Antoninus, is Rome,\nbut so far as I am a man, it is the world. The things then which are\nuseful to these cities are alone useful to me. Whatever happens to\nevery man, this is for the interest of the universal: this might be\nsufficient. But further thou wilt observe this also as a general truth,\nif thou dost observe, that whatever is profitable to any man is profitable\nalso to other men. But let the word profitable be taken here in the\ncommon sense as said of things of the middle kind, neither good nor\nbad. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'As it happens to thee in the amphitheatre and such places, that the\ncontinual sight of the same things and the uniformity make the spectacle\nwearisome, so it is in the whole of life; for all things above, below,\nare the same and from the same. How long then? ',
  },
  {
    book: 'Book Six',
    paragraph:
      'Think continually that all kinds of men and of all kinds of pursuits\nand of all nations are dead, so that thy thoughts come down even to\nPhilistion and Phoebus and Origanion. Now turn thy thoughts to the\nother kinds of men. To that place then we must remove, where there\nare so many great orators, and so many noble philosophers, Heraclitus,\nPythagoras, Socrates; so many heroes of former days, and so many generals\nafter them, and tyrants; besides these, Eudoxus, Hipparchus, Archimedes,\nand other men of acute natural talents, great minds, lovers of labour,\nversatile, confident, mockers even of the perishable and ephemeral\nlife of man, as Menippus and such as are like him. As to all these\nconsider that they have long been in the dust. What harm then is this\nto them; and what to those whose names are altogether unknown? One\nthing here is worth a great deal, to pass thy life in truth and justice,\nwith a benevolent disposition even to liars and unjust men.',
  },
  {
    book: 'Book Six',
    paragraph:
      'When thou wishest to delight thyself, think of the virtues of those\nwho live with thee; for instance, the activity of one, and the modesty\nof another, and the liberality of a third, and some other good quality\nof a fourth. For nothing delights so much as the examples of the virtues,\nwhen they are exhibited in the morals of those who live with us and\npresent themselves in abundance, as far as is possible. Wherefore\nwe must keep them before us. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'Thou art not dissatisfied, I suppose, because thou weighest only so\nmany litrae and not three hundred. Be not dissatisfied then that thou\nmust live only so many years and not more; for as thou art satisfied\nwith the amount of substance which has been assigned to thee, so be\ncontent with the time. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'Let us try to persuade them (men). But act even against their will,\nwhen the principles of justice lead that way. If however any man by\nusing force stands in thy way, betake thyself to contentment and tranquility,\nand at the same time employ the hindrance towards the exercise of\nsome other virtue; and remember that thy attempt was with a reservation,\nthat thou didst not desire to do impossibilities. What then didst\nthou desire?- Some such effort as this.- But thou attainest thy object,\nif the things to which thou wast moved are accomplished.',
  },
  {
    book: 'Book Six',
    paragraph:
      "He who loves fame considers another man's activity to be his own good;\nand he who loves pleasure, his own sensations; but he who has understanding,\nconsiders his own acts to be his own good. ",
  },
  {
    book: 'Book Six',
    paragraph:
      'It is in our power to have no opinion about a thing, and not to be\ndisturbed in our soul; for things themselves have no natural power\nto form our judgements. ',
  },
  {
    book: 'Book Six',
    paragraph:
      "Accustom thyself to attend carefully to what is said by another, and\nas much as it is possible, be in the speaker's mind. ",
  },
  {
    book: 'Book Six',
    paragraph:
      'That which is not good for the swarm, neither is it good for the bee.',
  },
  {
    book: 'Book Six',
    paragraph:
      'If sailors abused the helmsman or the sick the doctor, would they\nlisten to anybody else; or how could the helmsman secure the safety\nof those in the ship or the doctor the health of those whom he attends?',
  },
  {
    book: 'Book Six',
    paragraph:
      'How many together with whom I came into the world are already gone\nout of it. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'To the jaundiced honey tastes bitter, and to those bitten by mad dogs\nwater causes fear; and to little children the ball is a fine thing.\nWhy then am I angry? Dost thou think that a false opinion has less\npower than the bile in the jaundiced or the poison in him who is bitten\nby a mad dog? ',
  },
  {
    book: 'Book Six',
    paragraph:
      'No man will hinder thee from living according to the reason of thy\nown nature: nothing will happen to thee contrary to the reason of\nthe universal nature. ',
  },
  {
    book: 'Book Six',
    paragraph:
      'What kind of people are those whom men wish to please, and for what\nobjects, and by what kind of acts? How soon will time cover all things,\nand how many it has covered already. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'What is badness? It is that which thou hast often seen. And on the\noccasion of everything which happens keep this in mind, that it is\nthat which thou hast often seen. Everywhere up and down thou wilt\nfind the same things, with which the old histories are filled, those\nof the middle ages and those of our own day; with which cities and\nhouses are filled now. There is nothing new: all things are both familiar\nand short-lived. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'How can our principles become dead, unless the impressions (thoughts)\nwhich correspond to them are extinguished? But it is in thy power\ncontinuously to fan these thoughts into a flame. I can have that opinion\nabout anything, which I ought to have. If I can, why am I disturbed?\nThe things which are external to my mind have no relation at all to\nmy mind.- Let this be the state of thy affects, and thou standest\nerect. To recover thy life is in thy power. Look at things again as\nthou didst use to look at them; for in this consists the recovery\nof thy life. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'The idle business of show, plays on the stage, flocks of sheep, herds,\nexercises with spears, a bone cast to little dogs, a bit of bread\ninto fish-ponds, labourings of ants and burden-carrying, runnings\nabout of frightened little mice, puppets pulled by strings- all alike.\nIt is thy duty then in the midst of such things to show good humour\nand not a proud air; to understand however that every man is worth\njust so much as the things are worth about which he busies himself.',
  },
  {
    book: 'Book Seven',
    paragraph:
      'In discourse thou must attend to what is said, and in every movement\nthou must observe what is doing. And in the one thou shouldst see\nimmediately to what end it refers, but in the other watch carefully\nwhat is the thing signified. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Is my understanding sufficient for this or not? If it is sufficient,\nI use it for the work as an instrument given by the universal nature.\nBut if it is not sufficient, then either I retire from the work and\ngive way to him who is able to do it better, unless there be some\nreason why I ought not to do so; or I do it as well as I can, taking\nto help me the man who with the aid of my ruling principle can do\nwhat is now fit and useful for the general good. For whatsoever either\nby myself or with another I can do, ought to be directed to this only,\nto that which is useful and well suited to society. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'How many after being celebrated by fame have been given up to oblivion;\nand how many who have celebrated the fame of others have long been\ndead. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Be not ashamed to be helped; for it is thy business to do thy duty\nlike a soldier in the assault on a town. How then, if being lame thou\ncanst not mount up on the battlements alone, but with the help of\nanother it is possible? ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Let not future things disturb thee, for thou wilt come to them, if\nit shall be necessary, having with thee the same reason which now\nthou usest for present things. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'All things are implicated with one another, and the bond is holy;\nand there is hardly anything unconnected with any other thing. For\nthings have been co-ordinated, and they combine to form the same universe\n(order). For there is one universe made up of all things, and one\nGod who pervades all things, and one substance, and one law, one common\nreason in all intelligent animals, and one truth; if indeed there\nis also one perfection for all animals which are of the same stock\nand participate in the same reason. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Everything material soon disappears in the substance of the whole;\nand everything formal (causal) is very soon taken back into the universal\nreason; and the memory of everything is very soon overwhelmed in time.',
  },
  {
    book: 'Book Seven',
    paragraph:
      'To the rational animal the same act is according to nature and according\nto reason. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Be thou erect, or be made erect. \nJust as it is with the members in those bodies which are united in\none, so it is with rational beings which exist separate, for they\nhave been constituted for one co-operation. And the perception of\nthis will be more apparent to thee, if thou often sayest to thyself\nthat I am a member (melos) of the system of rational beings. But if\n(using the letter r) thou sayest that thou art a part (meros) thou\ndost not yet love men from thy heart; beneficence does not yet delight\nthee for its own sake; thou still doest it barely as a thing of propriety,\nand not yet as doing good to thyself. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Let there fall externally what will on the parts which can feel the\neffects of this fall. For those parts which have felt will complain,\nif they choose. But I, unless I think that what has happened is an\nevil, am not injured. And it is in my power not to think so.',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Whatever any one does or says, I must be good, just as if the gold,\nor the emerald, or the purple were always saying this, Whatever any\none does or says, I must be emerald and keep my colour. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'The ruling faculty does not disturb itself; I mean, does not frighten\nitself or cause itself pain. But if any one else can frighten or pain\nit, let him do so. For the faculty itself will not by its own opinion\nturn itself into such ways. Let the body itself take care, if it can,\nthat is suffer nothing, and let it speak, if it suffers. But the soul\nitself, that which is subject to fear, to pain, which has completely\nthe power of forming an opinion about these things, will suffer nothing,\nfor it will never deviate into such a judgement. The leading principle\nin itself wants nothing, unless it makes a want for itself; and therefore\nit is both free from perturbation and unimpeded, if it does not disturb\nand impede itself. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Eudaemonia (happiness) is a good daemon, or a good thing. What then\nart thou doing here, O imagination? Go away, I entreat thee by the\ngods, as thou didst come, for I want thee not. But thou art come according\nto thy old fashion. I am not angry with thee: only go away.',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Is any man afraid of change? Why what can take place without change?\nWhat then is more pleasing or more suitable to the universal nature?\nAnd canst thou take a bath unless the wood undergoes a change? And\ncanst thou be nourished, unless the food undergoes a change? And can\nanything else that is useful be accomplished without change? Dost\nthou not see then that for thyself also to change is just the same,\nand equally necessary for the universal nature? ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Through the universal substance as through a furious torrent all bodies\nare carried, being by their nature united with and cooperating with\nthe whole, as the parts of our body with one another. How many a Chrysippus,\nhow many a Socrates, how many an Epictetus has time already swallowed\nup? And let the same thought occur to thee with reference to every\nman and thing. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'One thing only troubles me, lest I should do something which the constitution\nof man does not allow, or in the way which it does not allow, or what\nit does not allow now. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Near is thy forgetfulness of all things; and near the forgetfulness\nof thee by all. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'It is peculiar to man to love even those who do wrong. And this happens,\nif when they do wrong it occurs to thee that they are kinsmen, and\nthat they do wrong through ignorance and unintentionally, and that\nsoon both of you will die; and above all, that the wrong-doer has\ndone thee no harm, for he has not made thy ruling faculty worse than\nit was before. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'The universal nature out of the universal substance, as if it were\nwax, now moulds a horse, and when it has broken this up, it uses the\nmaterial for a tree, then for a man, then for something else; and\neach of these things subsists for a very short time. But it is no\nhardship for the vessel to be broken up, just as there was none in\nits being fastened together. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'A scowling look is altogether unnatural; when it is often assumed,\nthe result is that all comeliness dies away, and at last is so completely\nextinguished that it cannot be again lighted up at all. Try to conclude\nfrom this very fact that it is contrary to reason. For if even the\nperception of doing wrong shall depart, what reason is there for living\nany longer? ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Nature which governs the whole will soon change all things which thou\nseest, and out of their substance will make other things, and again\nother things from the substance of them, in order that the world may\nbe ever new. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'When a man has done thee any wrong, immediately consider with what\nopinion about good or evil he has done wrong. For when thou hast seen\nthis, thou wilt pity him, and wilt neither wonder nor be angry. For\neither thou thyself thinkest the same thing to be good that he does\nor another thing of the same kind. It is thy duty then to pardon him.\nBut if thou dost not think such things to be good or evil, thou wilt\nmore readily be well disposed to him who is in error. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Think not so much of what thou hast not as of what thou hast: but\nof the things which thou hast select the best, and then reflect how\neagerly they would have been sought, if thou hadst them not. At the\nsame time however take care that thou dost not through being so pleased\nwith them accustom thyself to overvalue them, so as to be disturbed\nif ever thou shouldst not have them. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Retire into thyself. The rational principle which rules has this nature,\nthat it is content with itself when it does what is just, and so secures\ntranquility. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Wipe out the imagination. Stop the pulling of the strings. Confine\nthyself to the present. Understand well what happens either to thee\nor to another. Divide and distribute every object into the causal\n(formal) and the material. Think of thy last hour. Let the wrong which\nis done by a man stay there where the wrong was done. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Direct thy attention to what is said. Let thy understanding enter\ninto the things that are doing and the things which do them.',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Adorn thyself with simplicity and modesty and with indifference towards\nthe things which lie between virtue and vice. Love mankind. Follow\nGod. The poet says that Law rules all.- And it is enough to remember\nthat Law rules all. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'About death: Whether it is a dispersion, or a resolution into atoms,\nor annihilation, it is either extinction or change. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'About pain: The pain which is intolerable carries us off; but that\nwhich lasts a long time is tolerable; and the mind maintains its own\ntranquility by retiring into itself, and the ruling faculty is not\nmade worse. But the parts which are harmed by pain, let them, if they\ncan, give their opinion about it. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'About fame: Look at the minds of those who seek fame, observe what\nthey are, and what kind of things they avoid, and what kind of things\nthey pursue. And consider that as the heaps of sand piled on one another\nhide the former sands, so in life the events which go before are soon\ncovered by those which come after. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'From Plato: The man who has an elevated mind and takes a view of all\ntime and of all substance, dost thou suppose it possible for him to\nthink that human life is anything great? it is not possible, he said.-\nSuch a man then will think that death also is no evil.- Certainly\nnot. ',
  },
  {
    book: 'Book Seven',
    paragraph: 'From Antisthenes: It is royal to do good and to be abused.',
  },
  {
    book: 'Book Seven',
    paragraph:
      'It is a base thing for the countenance to be obedient and to regulate\nand compose itself as the mind commands, and for the mind not to be\nregulated and composed by itself. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'It is not right to vex ourselves at things, \nFor they care nought about it. ',
  },
  {
    book: 'Book Seven',
    paragraph: 'To the immortal gods and us give joy. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Life must be reaped like the ripe ears of corn: \nOne man is born; another dies. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'If gods care not for me and for my children, \nThere is a reason for it. ',
  },
  {
    book: 'Book Seven',
    paragraph: 'For the good is with me, and the just. ',
  },
  {
    book: 'Book Seven',
    paragraph: 'No joining others in their wailing, no violent emotion. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'From Plato: But I would make this man a sufficient answer, which is\nthis: Thou sayest not well, if thou thinkest that a man who is good\nfor anything at all ought to compute the hazard of life or death,\nand should not rather look to this only in all that he does, whether\nhe is doing what is just or unjust, and the works of a good or a bad\nman. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'For thus it is, men of Athens, in truth: wherever a man has placed\nhimself thinking it the best place for him, or has been placed by\na commander, there in my opinion he ought to stay and to abide the\nhazard, taking nothing into the reckoning, either death or anything\nelse, before the baseness of deserting his post. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'But, my good friend, reflect whether that which is noble and good\nis not something different from saving and being saved; for as to\na man living such or such a time, at least one who is really a man,\nconsider if this is not a thing to be dismissed from the thoughts:\nand there must be no love of life: but as to these matters a man must\nintrust them to the deity and believe what the women say, that no\nman can escape his destiny, the next inquiry being how he may best\nlive the time that he has to live. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Look round at the courses of the stars, as if thou wert going along\nwith them; and constantly consider the changes of the elements into\none another; for such thoughts purge away the filth of the terrene\nlife. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'This is a fine saying of Plato: That he who is discoursing about men\nshould look also at earthly things as if he viewed them from some\nhigher place; should look at them in their assemblies, armies, agricultural\nlabours, marriages, treaties, births, deaths, noise of the courts\nof justice, desert places, various nations of barbarians, feasts,\nlamentations, markets, a mixture of all things and an orderly combination\nof contraries. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Consider the past; such great changes of political supremacies. Thou\nmayest foresee also the things which will be. For they will certainly\nbe of like form, and it is not possible that they should deviate from\nthe order of the things which take place now: accordingly to have\ncontemplated human life for forty years is the same as to have contemplated\nit for ten thousand years. For what more wilt thou see? ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'That which has grown from the earth to the earth, \nBut that which has sprung from heavenly seed, \nBack to the heavenly realms returns. This is either a dissolution\nof the mutual involution of the atoms, or a similar dispersion of\nthe unsentient elements. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      "With food and drinks and cunning magic arts \nTurning the channel's course to 'scape from death. \nThe breeze which heaven has sent \nWe must endure, and toil without complaining. ",
  },
  {
    book: 'Book Seven',
    paragraph:
      'Another may be more expert in casting his opponent; but he is not\nmore social, nor more modest, nor better disciplined to meet all that\nhappens, nor more considerate with respect to the faults of his neighbours.',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Where any work can be done conformably to the reason which is common\nto gods and men, there we have nothing to fear: for where we are able\nto get profit by means of the activity which is successful and proceeds\naccording to our constitution, there no harm is to be suspected.',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Everywhere and at all times it is in thy power piously to acquiesce\nin thy present condition, and to behave justly to those who are about\nthee, and to exert thy skill upon thy present thoughts, that nothing\nshall steal into them without being well examined. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      "Do not look around thee to discover other men's ruling principles,\nbut look straight to this, to what nature leads thee, both the universal\nnature through the things which happen to thee, and thy own nature\nthrough the acts which must be done by thee. But every being ought\nto do that which is according to its constitution; and all other things\nhave been constituted for the sake of rational beings, just as among\nirrational things the inferior for the sake of the superior, but the\nrational for the sake of one another. ",
  },
  {
    book: 'Book Seven',
    paragraph:
      "The prime principle then in man's constitution is the social. And\nthe second is not to yield to the persuasions of the body, for it\nis the peculiar office of the rational and intelligent motion to circumscribe\nitself, and never to be overpowered either by the motion of the senses\nor of the appetites, for both are animal; but the intelligent motion\nclaims superiority and does not permit itself to be overpowered by\nthe others. And with good reason, for it is formed by nature to use\nall of them. The third thing in the rational constitution is freedom\nfrom error and from deception. Let then the ruling principle holding\nfast to these things go straight on, and it has what is its own.",
  },
  {
    book: 'Book Seven',
    paragraph:
      'Consider thyself to be dead, and to have completed thy life up to\nthe present time; and live according to nature the remainder which\nis allowed thee. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Love that only which happens to thee and is spun with the thread of\nthy destiny. For what is more suitable? ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'In everything which happens keep before thy eyes those to whom the\nsame things happened, and how they were vexed, and treated them as\nstrange things, and found fault with them: and now where are they?\nNowhere. Why then dost thou too choose to act in the same way? And\nwhy dost thou not leave these agitations which are foreign to nature,\nto those who cause them and those who are moved by them? And why art\nthou not altogether intent upon the right way of making use of the\nthings which happen to thee? For then thou wilt use them well, and\nthey will be a material for thee to work on. Only attend to thyself,\nand resolve to be a good man in every act which thou doest: and remember...',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Look within. Within is the fountain of good, and it will ever bubble\nup, if thou wilt ever dig. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'The body ought to be compact, and to show no irregularity either in\nmotion or attitude. For what the mind shows in the face by maintaining\nin it the expression of intelligence and propriety, that ought to\nbe required also in the whole body. But all of these things should\nbe observed without affectation. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      "The art of life is more like the wrestler's art than the dancer's,\nin respect of this, that it should stand ready and firm to meet onsets\nwhich are sudden and unexpected. ",
  },
  {
    book: 'Book Seven',
    paragraph:
      'Constantly observe who those are whose approbation thou wishest to\nhave, and what ruling principles they possess. For then thou wilt\nneither blame those who offend involuntarily, nor wilt thou want their\napprobation, if thou lookest to the sources of their opinions and\nappetites. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Every soul, the philosopher says, is involuntarily deprived of truth;\nconsequently in the same way it is deprived of justice and temperance\nand benevolence and everything of the kind. It is most necessary to\nbear this constantly in mind, for thus thou wilt be more gentle towards\nall. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'In every pain let this thought be present, that there is no dishonour\nin it, nor does it make the governing intelligence worse, for it does\nnot damage the intelligence either so far as the intelligence is rational\nor so far as it is social. Indeed in the case of most pains let this\nremark of Epicurus aid thee, that pain is neither intolerable nor\neverlasting, if thou bearest in mind that it has its limits, and if\nthou addest nothing to it in imagination: and remember this too, that\nwe do not perceive that many things which are disagreeable to us are\nthe same as pain, such as excessive drowsiness, and the being scorched\nby heat, and the having no appetite. When then thou art discontented\nabout any of these things, say to thyself, that thou art yielding\nto pain. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'Take care not to feel towards the inhuman, as they feel towards men.',
  },
  {
    book: 'Book Seven',
    paragraph:
      "How do we know if Telauges was not superior in character to Socrates?\nFor it is not enough that Socrates died a more noble death, and disputed\nmore skilfully with the sophists, and passed the night in the cold\nwith more endurance, and that when he was bid to arrest Leon of Salamis,\nhe considered it more noble to refuse, and that he walked in a swaggering\nway in the streets- though as to this fact one may have great doubts\nif it was true. But we ought to inquire, what kind of a soul it was\nthat Socrates possessed, and if he was able to be content with being\njust towards men and pious towards the gods, neither idly vexed on\naccount of men's villainy, nor yet making himself a slave to any man's\nignorance, nor receiving as strange anything that fell to his share\nout of the universal, nor enduring it as intolerable, nor allowing\nhis understanding to sympathize with the affects of the miserable\nflesh. ",
  },
  {
    book: 'Book Seven',
    paragraph:
      'Nature has not so mingled the intelligence with the composition of\nthe body, as not to have allowed thee the power of circumscribing\nthyself and of bringing under subjection to thyself all that is thy\nown; for it is very possible to be a divine man and to be recognised\nas such by no one. Always bear this in mind; and another thing too,\nthat very little indeed is necessary for living a happy life. And\nbecause thou hast despaired of becoming a dialectician and skilled\nin the knowledge of nature, do not for this reason renounce the hope\nof being both free and modest and social and obedient to God.',
  },
  {
    book: 'Book Seven',
    paragraph:
      "It is in thy power to live free from all compulsion in the greatest\ntranquility of mind, even if all the world cry out against thee as\nmuch as they choose, and even if wild beasts tear in pieces the members\nof this kneaded matter which has grown around thee. For what hinders\nthe mind in the midst of all this from maintaining itself in tranquility\nand in a just judgement of all surrounding things and in a ready use\nof the objects which are presented to it, so that the judgement may\nsay to the thing which falls under its observation: This thou art\nin substance (reality), though in men's opinion thou mayest appear\nto be of a different kind; and the use shall say to that which falls\nunder the hand: Thou art the thing that I was seeking; for to me that\nwhich presents itself is always a material for virtue both rational\nand political, and in a word, for the exercise of art, which belongs\nto man or God. For everything which happens has a relationship either\nto God or man, and is neither new nor difficult to handle, but usual\nand apt matter to work on. ",
  },
  {
    book: 'Book Seven',
    paragraph:
      'The perfection of moral character consists in this, in passing every\nday as the last, and in being neither violently excited nor torpid\nnor playing the hypocrite. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'The gods who are immortal are not vexed because during so long a time\nthey must tolerate continually men such as they are and so many of\nthem bad; and besides this, they also take care of them in all ways.\nBut thou, who art destined to end so soon, art thou wearied of enduring\nthe bad, and this too when thou art one of them? ',
  },
  {
    book: 'Book Seven',
    paragraph:
      "It is a ridiculous thing for a man not to fly from his own badness,\nwhich is indeed possible, but to fly from other men's badness, which\nis impossible. ",
  },
  {
    book: 'Book Seven',
    paragraph:
      'Whatever the rational and political (social) faculty finds to be neither\nintelligent nor social, it properly judges to be inferior to itself.',
  },
  {
    book: 'Book Seven',
    paragraph:
      'When thou hast done a good act and another has received it, why dost\nthou look for a third thing besides these, as fools do, either to\nhave the reputation of having done a good act or to obtain a return?',
  },
  {
    book: 'Book Seven',
    paragraph:
      'No man is tired of receiving what is useful. But it is useful to act\naccording to nature. Do not then be tired of receiving what is useful\nby doing it to others. ',
  },
  {
    book: 'Book Seven',
    paragraph:
      'The nature of the An moved to make the universe. But now either everything\nthat takes place comes by way of consequence or continuity; or even\nthe chief things towards which the ruling power of the universe directs\nits own movement are governed by no rational principle. If this is\nremembered it will make thee more tranquil in many things.',
  },
  {
    book: 'Book Eight',
    paragraph:
      "This reflection also tends to the removal of the desire of empty\nfame, that it is no longer in thy power to have lived the whole of\nthy life, or at least thy life from thy youth upwards, like a philosopher;\nbut both to many others and to thyself it is plain that thou art far\nfrom philosophy. Thou hast fallen into disorder then, so that it is\nno longer easy for thee to get the reputation of a philosopher; and\nthy plan of life also opposes it. If then thou hast truly seen where\nthe matter lies, throw away the thought, How thou shalt seem to others,\nand be content if thou shalt live the rest of thy life in such wise\nas thy nature wills. Observe then what it wills, and let nothing else\ndistract thee; for thou hast had experience of many wanderings without\nhaving found happiness anywhere, not in syllogisms, nor in wealth,\nnor in reputation, nor in enjoyment, nor anywhere. Where is it then?\nIn doing what man's nature requires. How then shall a man do this?\nIf he has principles from which come his affects and his acts. What\nprinciples? Those which relate to good and bad: the belief that there\nis nothing good for man, which does not make him just, temperate,\nmanly, free; and that there is nothing bad, which does not do the\ncontrary to what has been mentioned. ",
  },
  {
    book: 'Book Eight',
    paragraph:
      'On the occasion of every act ask thyself, How is this with respect\nto me? Shall I repent of it? A little time and I am dead, and all\nis gone. What more do I seek, if what I am now doing is work of an\nintelligent living being, and a social being, and one who is under\nthe same law with God? ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Alexander and Gaius and Pompeius, what are they in comparison with\nDiogenes and Heraclitus and Socrates? For they were acquainted with\nthings, and their causes (forms), and their matter, and the ruling\nprinciples of these men were the same. But as to the others, how many\nthings had they to care for, and to how many things were they slaves?',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Consider that men will do the same things nevertheless, even though\nthou shouldst burst. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      "This is the chief thing: Be not perturbed, for all things are according\nto the nature of the universal; and in a little time thou wilt be\nnobody and nowhere, like Hadrian and Augustus. In the next place having\nfixed thy eyes steadily on thy business look at it, and at the same\ntime remembering that it is thy duty to be a good man, and what man's\nnature demands, do that without turning aside; and speak as it seems\nto thee most just, only let it be with a good disposition and with\nmodesty and without hypocrisy. ",
  },
  {
    book: 'Book Eight',
    paragraph:
      'The nature of the universal has this work to do, to remove to that\nplace the things which are in this, to change them, to take them away\nhence, and to carry them there. All things are change, yet we need\nnot fear anything new. All things are familiar to us; but the distribution\nof them still remains the same. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Every nature is contented with itself when it goes on its way well;\nand a rational nature goes on its way well, when in its thoughts it\nassents to nothing false or uncertain, and when it directs its movements\nto social acts only, and when it confines its desires and aversions\nto the things which are in its power, and when it is satisfied with\neverything that is assigned to it by the common nature. For of this\ncommon nature every particular nature is a part, as the nature of\nthe leaf is a part of the nature of the plant; except that in the\nplant the nature of the leaf is part of a nature which has not perception\nor reason, and is subject to be impeded; but the nature of man is\npart of a nature which is not subject to impediments, and is intelligent\nand just, since it gives to everything in equal portions and according\nto its worth, times, substance, cause (form), activity, and incident.\nBut examine, not to discover that any one thing compared with any\nother single thing is equal in all respects, but by taking all the\nparts together of one thing and comparing them with all the parts\ntogether of another. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Thou hast not leisure or ability to read. But thou hast leisure or\nability to check arrogance: thou hast leisure to be superior to pleasure\nand pain: thou hast leisure to be superior to love of fame, and not\nto be vexed at stupid and ungrateful people, nay even to care for\nthem. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Let no man any longer hear thee finding fault with the court life\nor with thy own. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Repentance is a kind of self-reproof for having neglected something\nuseful; but that which is good must be something useful, and the perfect\ngood man should look after it. But no such man would ever repent of\nhaving refused any sensual pleasure. Pleasure then is neither good\nnor useful. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'This thing, what is it in itself, in its own constitution? What is\nits substance and material? And what its causal nature (or form)?\nAnd what is it doing in the world? And how long does it subsist?',
  },
  {
    book: 'Book Eight',
    paragraph:
      "When thou risest from sleep with reluctance, remember that it is according\nto thy constitution and according to human nature to perform social\nacts, but sleeping is common also to irrational animals. But that\nwhich is according to each individual's nature is also more peculiarly\nits own, and more suitable to its nature, and indeed also more agreeable.",
  },
  {
    book: 'Book Eight',
    paragraph:
      'Constantly and, if it be possible, on the occasion of every impression\non the soul, apply to it the principles of Physic, of Ethic, and of\nDialectic. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Whatever man thou meetest with, immediately say to thyself: What opinions\nhas this man about good and bad? For if with respect to pleasure and\npain and the causes of each, and with respect to fame and ignominy,\ndeath and life, he has such and such opinions, it will seem nothing\nwonderful or strange to me, if he does such and such things; and I\nshall bear in mind that he is compelled to do so. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Remember that as it is a shame to be surprised if the fig-tree produces\nfigs, so it is to be surprised if the world produces such and such\nthings of which it is productive; and for the physician and the helmsman\nit is a shame to be surprised, if a man has a fever, or if the wind\nis unfavourable. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Remember that to change thy opinion and to follow him who corrects\nthy error is as consistent with freedom as it is to persist in thy\nerror. For it is thy own, the activity which is exerted according\nto thy own movement and judgement, and indeed according to thy own\nunderstanding too. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'If a thing is in thy own power, why dost thou do it? But if it is\nin the power of another, whom dost thou blame? The atoms (chance)\nor the gods? Both are foolish. Thou must blame nobody. For if thou\ncanst, correct that which is the cause; but if thou canst not do this,\ncorrect at least the thing itself; but if thou canst not do even this,\nof what use is it to thee to find fault? For nothing should be done\nwithout a purpose. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'That which has died falls not out of the universe. If it stays here,\nit also changes here, and is dissolved into its proper parts, which\nare elements of the universe and of thyself. And these too change,\nand they murmur not. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Everything exists for some end, a horse, a vine. Why dost thou wonder?\nEven the sun will say, I am for some purpose, and the rest of the\ngods will say the same. For what purpose then art thou? to enjoy pleasure?\nSee if common sense allows this. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Nature has had regard in everything no less to the end than to the\nbeginning and the continuance, just like the man who throws up a ball.\nWhat good is it then for the ball to be thrown up, or harm for it\nto come down, or even to have fallen? And what good is it to the bubble\nwhile it holds together, or what harm when it is burst? The same may\nbe said of a light also. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Turn it (the body) inside out, and see what kind of thing it is; and\nwhen it has grown old, what kind of thing it becomes, and when it\nis diseased. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Short-lived are both the praiser and the praised, and the rememberer\nand the remembered: and all this in a nook of this part of the world;\nand not even here do all agree, no, not any one with himself: and\nthe whole earth too is a point. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Attend to the matter which is before thee, whether it is an opinion\nor an act or a word. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Thou sufferest this justly: for thou choosest rather to become good\nto-morrow than to be good to-day. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Am I doing anything? I do it with reference to the good of mankind.\nDoes anything happen to me? I receive it and refer it to the gods,\nand the source of all things, from which all that happens is derived.',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Such as bathing appears to thee- oil, sweat, dirt, filthy water, all\nthings disgusting- so is every part of life and everything.',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Lucilla saw Verus die, and then Lucilla died. Secunda saw Maximus\ndie, and then Secunda died. Epitynchanus saw Diotimus die, and Epitynchanus\ndied. Antoninus saw Faustina die, and then Antoninus died. Such is\neverything. Celer saw Hadrian die, and then Celer died. And those\nsharp-witted men, either seers or men inflated with pride, where are\nthey? For instance the sharp-witted men, Charax and Demetrius the\nPlatonist and Eudaemon, and any one else like them. All ephemeral,\ndead long ago. Some indeed have not been remembered even for a short\ntime, and others have become the heroes of fables, and again others\nhave disappeared even from fables. Remember this then, that this little\ncompound, thyself, must either be dissolved, or thy poor breath must\nbe extinguished, or be removed and placed elsewhere. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'It is satisfaction to a man to do the proper works of a man. Now it\nis a proper work of a man to be benevolent to his own kind, to despise\nthe movements of the senses, to form a just judgement of plausible\nappearances, and to take a survey of the nature of the universe and\nof the things which happen in it. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'There are three relations between thee and other things: the one to\nthe body which surrounds thee; the second to the divine cause from\nwhich all things come to all; and the third to those who live with\nthee. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Pain is either an evil to the body- then let the body say what it\nthinks of it- or to the soul; but it is in the power of the soul to\nmaintain its own serenity and tranquility, and not to think that pain\nis an evil. For every judgement and movement and desire and aversion\nis within, and no evil ascends so high. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Wipe out thy imaginations by often saying to thyself: now it is in\nmy power to let no badness be in this soul, nor desire nor any perturbation\nat all; but looking at all things I see what is their nature, and\nI use each according to its value.- Remember this power which thou\nhast from nature. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Speak both in the senate and to every man, whoever he may be, appropriately,\nnot with any affectation: use plain discourse. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      "Augustus' court, wife, daughter, descendants, ancestors, sister, Agrippa,\nkinsmen, intimates, friends, Areius, Maecenas, physicians and sacrificing\npriests- the whole court is dead. Then turn to the rest, not considering\nthe death of a single man, but of a whole race, as of the Pompeii;\nand that which is inscribed on the tombs- The last of his race. Then\nconsider what trouble those before them have had that they might leave\na successor; and then, that of necessity some one must be the last.\nAgain here consider the death of a whole race. ",
  },
  {
    book: 'Book Eight',
    paragraph:
      'It is thy duty to order thy life well in every single act; and if\nevery act does its duty, as far as is possible, be content; and no\none is able to hinder thee so that each act shall not do its duty.-\nBut something external will stand in the way.- Nothing will stand\nin the way of thy acting justly and soberly and considerately.- But\nperhaps some other active power will be hindered.- Well, but by acquiescing\nin the hindrance and by being content to transfer thy efforts to that\nwhich is allowed, another opportunity of action is immediately put\nbefore thee in place of that which was hindered, and one which will\nadapt itself to this ordering of which we are speaking. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Receive wealth or prosperity without arrogance; and be ready to let\nit go. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'If thou didst ever see a hand cut off, or a foot, or a head, lying\nanywhere apart from the rest of the body, such does a man make himself,\nas far as he can, who is not content with what happens, and separates\nhimself from others, or does anything unsocial. Suppose that thou\nhast detached thyself from the natural unity- for thou wast made by\nnature a part, but now thou hast cut thyself off- yet here there is\nthis beautiful provision, that it is in thy power again to unite thyself.\nGod has allowed this to no other part, after it has been separated\nand cut asunder, to come together again. But consider the kindness\nby which he has distinguished man, for he has put it in his power\nnot to be separated at all from the universal; and when he has been\nseparated, he has allowed him to return and to be united and to resume\nhis place as a part. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'As the nature of the universal has given to every rational being all\nthe other powers that it has, so we have received from it this power\nalso. For as the universal nature converts and fixes in its predestined\nplace everything which stands in the way and opposes it, and makes\nsuch things a part of itself, so also the rational animal is able\nto make every hindrance its own material, and to use it for such purposes\nas it may have designed. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Do not disturb thyself by thinking of the whole of thy life. Let not\nthy thoughts at once embrace all the various troubles which thou mayest\nexpect to befall thee: but on every occasion ask thyself, What is\nthere in this which is intolerable and past bearing? For thou wilt\nbe ashamed to confess. In the next place remember that neither the\nfuture nor the past pains thee, but only the present. But this is\nreduced to a very little, if thou only circumscribest it, and chidest\nthy mind, if it is unable to hold out against even this.',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Does Panthea or Pergamus now sit by the tomb of Verus? Does Chaurias\nor Diotimus sit by the tomb of Hadrian? That would be ridiculous.\nWell, suppose they did sit there, would the dead be conscious of it?\nAnd if the dead were conscious, would they be pleased? And if they\nwere pleased, would that make them immortal? Was it not in the order\nof destiny that these persons too should first become old women and\nold men and then die? What then would those do after these were dead?\nAll this is foul smell and blood in a bag. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'If thou canst see sharp, look and judge wisely, says the philosopher.',
  },
  {
    book: 'Book Eight',
    paragraph:
      'In the constitution of the rational animal I see no virtue which is\nopposed to justice; but I see a virtue which is opposed to love of\npleasure, and that is temperance. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'If thou takest away thy opinion about that which appears to give thee\npain, thou thyself standest in perfect security.- Who is this self?-\nThe reason.- But I am not reason.- Be it so. Let then the reason itself\nnot trouble itself. But if any other part of thee suffers, let it\nhave its own opinion about itself. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Hindrance to the perceptions of sense is an evil to the animal nature.\nHindrance to the movements (desires) is equally an evil to the animal\nnature. And something else also is equally an impediment and an evil\nto the constitution of plants. So then that which is a hindrance to\nthe intelligence is an evil to the intelligent nature. Apply all these\nthings then to thyself. Does pain or sensuous pleasure affect thee?\nThe senses will look to that.- Has any obstacle opposed thee in thy\nefforts towards an object? if indeed thou wast making this effort\nabsolutely (unconditionally, or without any reservation), certainly\nthis obstacle is an evil to thee considered as a rational animal.\nBut if thou takest into consideration the usual course of things,\nthou hast not yet been injured nor even impeded. The things however\nwhich are proper to the understanding no other man is used to impede,\nfor neither fire, nor iron, nor tyrant, nor abuse, touches it in any\nway. When it has been made a sphere, it continues a sphere.',
  },
  {
    book: 'Book Eight',
    paragraph:
      'It is not fit that I should give myself pain, for I have never intentionally\ngiven pain even to another. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Different things delight different people. But it is my delight to\nkeep the ruling faculty sound without turning away either from any\nman or from any of the things which happen to men, but looking at\nand receiving all with welcome eyes and using everything according\nto its value. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'See that thou secure this present time to thyself: for those who rather\npursue posthumous fame do consider that the men of after time will\nbe exactly such as these whom they cannot bear now; and both are mortal.\nAnd what is it in any way to thee if these men of after time utter\nthis or that sound, or have this or that opinion about thee?',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Take me and cast me where thou wilt; for there I shall keep my divine\npart tranquil, that is, content, if it can feel and act conformably\nto its proper constitution. Is this change of place sufficient reason\nwhy my soul should be unhappy and worse than it was, depressed, expanded,\nshrinking, affrighted? And what wilt thou find which is sufficient\nreason for this? ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Nothing can happen to any man which is not a human accident, nor to\nan ox which is not according to the nature of an ox, nor to a vine\nwhich is not according to the nature of a vine, nor to a stone which\nis not proper to a stone. If then there happens to each thing both\nwhat is usual and natural, why shouldst thou complain? For the common\nnature brings nothing which may not be borne by thee. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'If thou art pained by any external thing, it is not this thing that\ndisturbs thee, but thy own judgement about it. And it is in thy power\nto wipe out this judgement now. But if anything in thy own disposition\ngives thee pain, who hinders thee from correcting thy opinion? And\neven if thou art pained because thou art not doing some particular\nthing which seems to thee to be right, why dost thou not rather act\nthan complain?- But some insuperable obstacle is in the way?- Do not\nbe grieved then, for the cause of its not being done depends not on\nthee.- But it is not worth while to live if this cannot be done.-\nTake thy departure then from life contentedly, just as he dies who\nis in full activity, and well pleased too with the things which are\nobstacles. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Remember that the ruling faculty is invincible, when self-collected\nit is satisfied with itself, if it does nothing which it does not\nchoose to do, even if it resist from mere obstinacy. What then will\nit be when it forms a judgement about anything aided by reason and\ndeliberately? Therefore the mind which is free from passions is a\ncitadel, for man has nothing more secure to which he can fly for,\nrefuge and for the future be inexpugnable. He then who has not seen\nthis is an ignorant man; but he who has seen it and does not fly to\nthis refuge is unhappy. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Say nothing more to thyself than what the first appearances report.\nSuppose that it has been reported to thee that a certain person speaks\nill of thee. This has been reported; but that thou hast been injured,\nthat has not been reported. I see that my child is sick. I do see;\nbut that he is in danger, I do not see. Thus then always abide by\nthe first appearances, and add nothing thyself from within, and then\nnothing happens to thee. Or rather add something, like a man who knows\neverything that happens in the world. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'A cucumber is bitter.- Throw it away.- There are briars in the road.-\nTurn aside from them.- This is enough. Do not add, And why were such\nthings made in the world? For thou wilt be ridiculed by a man who\nis acquainted with nature, as thou wouldst be ridiculed by a carpenter\nand shoemaker if thou didst find fault because thou seest in their\nworkshop shavings and cuttings from the things which they make. And\nyet they have places into which they can throw these shavings and\ncuttings, and the universal nature has no external space; but the\nwondrous part of her art is that though she has circumscribed herself,\neverything within her which appears to decay and to grow old and to\nbe useless she changes into herself, and again makes other new things\nfrom these very same, so that she requires neither substance from\nwithout nor wants a place into which she may cast that which decays.\nShe is content then with her own space, and her own matter and her\nown art. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Neither in thy actions be sluggish nor in thy conversation without\nmethod, nor wandering in thy thoughts, nor let there be in thy soul\ninward contention nor external effusion, nor in life be so busy as\nto have no leisure. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Suppose that men kill thee, cut thee in pieces, curse thee. What then\ncan these things do to prevent thy mind from remaining pure, wise,\nsober, just? For instance, if a man should stand by a limpid pure\nspring, and curse it, the spring never ceases sending up potable water;\nand if he should cast clay into it or filth, it will speedily disperse\nthem and wash them out, and will not be at all polluted. How then\nshalt thou possess a perpetual fountain and not a mere well? By forming\nthyself hourly to freedom conjoined with contentment, simplicity and\nmodesty. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'He who does not know what the world is, does not know where he is.\nAnd he who does not know for what purpose the world exists, does not\nknow who he is, nor what the world is. But he who has failed in any\none of these things could not even say for what purpose he exists\nhimself. What then dost thou think of him who avoids or seeks the\npraise of those who applaud, of men who know not either where they\nare or who they are? ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Dost thou wish to be praised by a man who curses himself thrice every\nhour? Wouldst thou wish to please a man who does not please himself?\nDoes a man please himself who repents of nearly everything that he\ndoes? ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'No longer let thy breathing only act in concert with the air which\nsurrounds thee, but let thy intelligence also now be in harmony with\nthe intelligence which embraces all things. For the intelligent power\nis no less diffused in all parts and pervades all things for him who\nis willing to draw it to him than the aerial power for him who is\nable to respire it. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Generally, wickedness does no harm at all to the universe; and particularly,\nthe wickedness of one man does no harm to another. It is only harmful\nto him who has it in his power to be released from it, as soon as\nhe shall choose. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      "To my own free will the free will of my neighbour is just as indifferent\nas his poor breath and flesh. For though we are made especially for\nthe sake of one another, still the ruling power of each of us has\nits own office, for otherwise my neighbour's wickedness would be my\nharm, which God has not willed in order that my unhappiness may not\ndepend on another. ",
  },
  {
    book: 'Book Eight',
    paragraph:
      "The sun appears to be poured down, and in all directions indeed it\nis diffused, yet it is not effused. For this diffusion is extension:\nAccordingly its rays are called Extensions [aktines] because they\nare extended [apo tou ekteinesthai]. But one may judge what kind of\na thing a ray is, if he looks at the sun's light passing through a\nnarrow opening into a darkened room, for it is extended in a right\nline, and as it were is divided when it meets with any solid body\nwhich stands in the way and intercepts the air beyond; but there the\nlight remains fixed and does not glide or fall off. Such then ought\nto be the out-pouring and diffusion of the understanding, and it should\nin no way be an effusion, but an extension, and it should make no\nviolent or impetuous collision with the obstacles which are in its\nway; nor yet fall down, but be fixed and enlighten that which receives\nit. For a body will deprive itself of the illumination, if it does\nnot admit it. ",
  },
  {
    book: 'Book Eight',
    paragraph:
      'He who fears death either fears the loss of sensation or a different\nkind of sensation. But if thou shalt have no sensation, neither wilt\nthou feel any harm; and if thou shalt acquire another kind of sensation,\nthou wilt be a different kind of living being and thou wilt not cease\nto live. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'Men exist for the sake of one another. Teach them then or bear with\nthem. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      'In one way an arrow moves, in another way the mind. The mind indeed,\nboth when it exercises caution and when it is employed about inquiry,\nmoves straight onward not the less, and to its object. ',
  },
  {
    book: 'Book Eight',
    paragraph:
      "Enter into every man's ruling faculty; and also let every other man\nenter into thine. ",
  },
  {
    book: 'Book Nine',
    paragraph:
      'He ho acts unjustly acts impiously. For since the universal nature\nhas made rational animals for the sake of one another to help one\nanother according to their deserts, but in no way to injure one another,\nhe who transgresses her will, is clearly guilty of impiety towards\nthe highest divinity. And he too who lies is guilty of impiety to\nthe same divinity; for the universal nature is the nature of things\nthat are; and things that are have a relation to all things that come\ninto existence. And further, this universal nature is named truth,\nand is the prime cause of all things that are true. He then who lies\nintentionally is guilty of impiety inasmuch as he acts unjustly by\ndeceiving; and he also who lies unintentionally, inasmuch as he is\nat variance with the universal nature, and inasmuch as he disturbs\nthe order by fighting against the nature of the world; for he fights\nagainst it, who is moved of himself to that which is contrary to truth,\nfor he had received powers from nature through the neglect of which\nhe is not able now to distinguish falsehood from truth. And indeed\nhe who pursues pleasure as good, and avoids pain as evil, is guilty\nof impiety. For of necessity such a man must often find fault with\nthe universal nature, alleging that it assigns things to the bad and\nthe good contrary to their deserts, because frequently the bad are\nin the enjoyment of pleasure and possess the things which procure\npleasure, but the good have pain for their share and the things which\ncause pain. And further, he who is afraid of pain will sometimes also\nbe afraid of some of the things which will happen in the world, and\neven this is impiety. And he who pursues pleasure will not abstain\nfrom injustice, and this is plainly impiety. Now with respect to the\nthings towards which the universal nature is equally affected- for\nit would not have made both, unless it was equally affected towards\nboth- towards these they who wish to follow nature should be of the\nsame mind with it, and equally affected. With respect to pain, then,\nand pleasure, or death and life, or honour and dishonour, which the\nuniversal nature employs equally, whoever is not equally affected\nis manifestly acting impiously. And I say that the universal nature\nemploys them equally, instead of saying that they happen alike to\nthose who are produced in continuous series and to those who come\nafter them by virtue of a certain original movement of Providence,\naccording to which it moved from a certain beginning to this ordering\nof things, having conceived certain principles of the things which\nwere to be, and having determined powers productive of beings and\nof changes and of such like successions. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      "It would be a man's happiest lot to depart from mankind without having\nhad any taste of lying and hypocrisy and luxury and pride. However\nto breathe out one's life when a man has had enough of these things\nis the next best voyage, as the saying is. Hast thou determined to\nabide with vice, and has not experience yet induced thee to fly from\nthis pestilence? For the destruction of the understanding is a pestilence,\nmuch more indeed than any such corruption and change of this atmosphere\nwhich surrounds us. For this corruption is a pestilence of animals\nso far as they are animals; but the other is a pestilence of men so\nfar as they are men. ",
  },
  {
    book: 'Book Nine',
    paragraph:
      "Do not despise death, but be well content with it, since this too\nis one of those things which nature wills. For such as it is to be\nyoung and to grow old, and to increase and to reach maturity, and\nto have teeth and beard and grey hairs, and to beget, and to be pregnant\nand to bring forth, and all the other natural operations which the\nseasons of thy life bring, such also is dissolution. This, then, is\nconsistent with the character of a reflecting man, to be neither careless\nnor impatient nor contemptuous with respect to death, but to wait\nfor it as one of the operations of nature. As thou now waitest for\nthe time when the child shall come out of thy wife's womb, so be ready\nfor the time when thy soul shall fall out of this envelope. But if\nthou requirest also a vulgar kind of comfort which shall reach thy\nheart, thou wilt be made best reconciled to death by observing the\nobjects from which thou art going to be removed, and the morals of\nthose with whom thy soul will no longer be mingled. For it is no way\nright to be offended with men, but it is thy duty to care for them\nand to bear with them gently; and yet to remember that thy departure\nwill be not from men who have the same principles as thyself. For\nthis is the only thing, if there be any, which could draw us the contrary\nway and attach us to life, to be permitted to live with those who\nhave the same principles as ourselves. But now thou seest how great\nis the trouble arising from the discordance of those who live together,\nso that thou mayest say, Come quick, O death, lest perchance I, too,\nshould forget myself. ",
  },
  {
    book: 'Book Nine',
    paragraph:
      'He who does wrong does wrong against himself. He who acts unjustly\nacts unjustly to himself, because he makes himself bad. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'He often acts unjustly who does not do a certain thing; not only he\nwho does a certain thing. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'Thy present opinion founded on understanding, and thy present conduct\ndirected to social good, and thy present disposition of contentment\nwith everything which happens- that is enough. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'Wipe out imagination: check desire: extinguish appetite: keep the\nruling faculty in its own power. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'Among the animals which have not reason one life is distributed; but\namong reasonable animals one intelligent soul is distributed: just\nas there is one earth of all things which are of an earthy nature,\nand we see by one light, and breathe one air, all of us that have\nthe faculty of vision and all that have life. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'All things which participate in anything which is common to them all\nmove towards that which is of the same kind with themselves. Everything\nwhich is earthy turns towards the earth, everything which is liquid\nflows together, and everything which is of an aerial kind does the\nsame, so that they require something to keep them asunder, and the\napplication of force. Fire indeed moves upwards on account of the\nelemental fire, but it is so ready to be kindled together with all\nthe fire which is here, that even every substance which is somewhat\ndry, is easily ignited, because there is less mingled with it of that\nwhich is a hindrance to ignition. Accordingly then everything also\nwhich participates in the common intelligent nature moves in like\nmanner towards that which is of the same kind with itself, or moves\neven more. For so much as it is superior in comparison with all other\nthings, in the same degree also is it more ready to mingle with and\nto be fused with that which is akin to it. Accordingly among animals\ndevoid of reason we find swarms of bees, and herds of cattle, and\nthe nurture of young birds, and in a manner, loves; for even in animals\nthere are souls, and that power which brings them together is seen\nto exert itself in the superior degree, and in such a way as never\nhas been observed in plants nor in stones nor in trees. But in rational\nanimals there are political communities and friendships, and families\nand meetings of people; and in wars, treaties and armistices. But\nin the things which are still superior, even though they are separated\nfrom one another, unity in a manner exists, as in the stars. Thus\nthe ascent to the higher degree is able to produce a sympathy even\nin things which are separated. See, then, what now takes place. For\nonly intelligent animals have now forgotten this mutual desire and\ninclination, and in them alone the property of flowing together is\nnot seen. But still though men strive to avoid this union, they are\ncaught and held by it, for their nature is too strong for them; and\nthou wilt see what I say, if thou only observest. Sooner, then, will\none find anything earthy which comes in contact with no earthy thing\nthan a man altogether separated from other men. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'Both man and God and the universe produce fruit; at the proper seasons\neach produces it. But if usage has especially fixed these terms to\nthe vine and like things, this is nothing. Reason produces fruit both\nfor all and for itself, and there are produced from it other things\nof the same kind as reason itself. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'If thou art able, correct by teaching those who do wrong; but if thou\ncanst not, remember that indulgence is given to thee for this purpose.\nAnd the gods, too, are indulgent to such persons; and for some purposes\nthey even help them to get health, wealth, reputation; so kind they\nare. And it is in thy power also; or say, who hinders thee?',
  },
  {
    book: 'Book Nine',
    paragraph:
      'Labour not as one who is wretched, nor yet as one who would be pitied\nor admired: but direct thy will to one thing only, to put thyself\nin motion and to check thyself, as the social reason requires.',
  },
  {
    book: 'Book Nine',
    paragraph:
      'To-day I have got out of all trouble, or rather I have cast out all\ntrouble, for it was not outside, but within and in my opinions.',
  },
  {
    book: 'Book Nine',
    paragraph:
      'All things are the same, familiar in experience, and ephemeral in\ntime, and worthless in the matter. Everything now is just as it was\nin the time of those whom we have buried. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'Things stand outside of us, themselves by themselves, neither knowing\naught of themselves, nor expressing any judgement. What is it, then,\nwhich does judge about them? The ruling faculty. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'Not in passivity, but in activity lie the evil and the good of the\nrational social animal, just as his virtue and his vice lie not in\npassivity, but in activity. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'For the stone which has been thrown up it is no evil to come down,\nnor indeed any good to have been carried up. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      "Penetrate inwards into men's leading principles, and thou wilt see\nwhat judges thou art afraid of, and what kind of judges they are of\nthemselves. ",
  },
  {
    book: 'Book Nine',
    paragraph:
      'All things are changing: and thou thyself art in continuous mutation\nand in a manner in continuous destruction, and the whole universe\ntoo. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      "It is thy duty to leave another man's wrongful act there where it\nis. ",
  },
  {
    book: 'Book Nine',
    paragraph:
      'Termination of activity, cessation from movement and opinion, and\nin a sense their death, is no evil. Turn thy thoughts now to the consideration\nof thy life, thy life as a child, as a youth, thy manhood, thy old\nage, for in these also every change was a death. Is this anything\nto fear? Turn thy thoughts now to thy life under thy grandfather,\nthen to thy life under thy mother, then to thy life under thy father;\nand as thou findest many other differences and changes and terminations,\nask thyself, Is this anything to fear? In like manner, then, neither\nare the termination and cessation and change of thy whole life a thing\nto be afraid of. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'Hasten to examine thy own ruling faculty and that of the universe\nand that of thy neighbour: thy own that thou mayest make it just:\nand that of the universe, that thou mayest remember of what thou art\na part; and that of thy neighbour, that thou mayest know whether he\nhas acted ignorantly or with knowledge, and that thou mayest also\nconsider that his ruling faculty is akin to thine. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'As thou thyself art a component part of a social system, so let every\nact of thine be a component part of social life. Whatever act of thine\nthen has no reference either immediately or remotely to a social end,\nthis tears asunder thy life, and does not allow it to be one, and\nit is of the nature of a mutiny, just as when in a popular assembly\na man acting by himself stands apart from the general agreement.',
  },
  {
    book: 'Book Nine',
    paragraph:
      'Quarrels of little children and their sports, and poor spirits carrying\nabout dead bodies, such is everything; and so what is exhibited in\nthe representation of the mansions of the dead strikes our eyes more\nclearly. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'Examine into the quality of the form of an object, and detach it altogether\nfrom its material part, and then contemplate it; then determine the\ntime, the longest which a thing of this peculiar form is naturally\nmade to endure. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'Thou hast endured infinite troubles through not being contented with\nthy ruling faculty, when it does the things which it is constituted\nby nature to do. But enough of this. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'When another blames thee or hates thee, or when men say about thee\nanything injurious, approach their poor souls, penetrate within, and\nsee what kind of men they are. Thou wilt discover that there is no\nreason to take any trouble that these men may have this or that opinion\nabout thee. However thou must be well disposed towards them, for by\nnature they are friends. And the gods too aid them in all ways, by\ndreams, by signs, towards the attainment of those things on which\nthey set a value. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'The periodic movements of the universe are the same, up and down from\nage to age. And either the universal intelligence puts itself in motion\nfor every separate effect, and if this is so, be thou content with\nthat which is the result of its activity; or it puts itself in motion\nonce, and everything else comes by way of sequence in a manner; or\nindivisible elements are the origin of all things.- In a word, if\nthere is a god, all is well; and if chance rules, do not thou also\nbe governed by it. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'Soon will the earth cover us all: then the earth, too, will change,\nand the things also which result from change will continue to change\nfor ever, and these again for ever. For if a man reflects on the changes\nand transformations which follow one another like wave after wave\nand their rapidity, he will despise everything which is perishable.',
  },
  {
    book: 'Book Nine',
    paragraph:
      "The universal cause is like a winter torrent: it carries everything\nalong with it. But how worthless are all these poor people who are\nengaged in matters political, and, as they suppose, are playing the\nphilosopher! All drivellers. Well then, man: do what nature now requires.\nSet thyself in motion, if it is in thy power, and do not look about\nthee to see if any one will observe it; nor yet expect Plato's Republic:\nbut be content if the smallest thing goes on well, and consider such\nan event to be no small matter. For who can change men's opinions?\nAnd without a change of opinions what else is there than the slavery\nof men who groan while they pretend to obey? Come now and tell me\nof Alexander and Philip and Demetrius of Phalerum. They themselves\nshall judge whether they discovered what the common nature required,\nand trained themselves accordingly. But if they acted like tragedy\nheroes, no one has condemned me to imitate them. Simple and modest\nis the work of philosophy. Draw me not aside to indolence and pride.",
  },
  {
    book: 'Book Nine',
    paragraph:
      'Look down from above on the countless herds of men and their countless\nsolemnities, and the infinitely varied voyagings in storms and calms,\nand the differences among those who are born, who live together, and\ndie. And consider, too, the life lived by others in olden time, and\nthe life of those who will live after thee, and the life now lived\namong barbarous nations, and how many know not even thy name, and\nhow many will soon forget it, and how they who perhaps now are praising\nthee will very soon blame thee, and that neither a posthumous name\nis of any value, nor reputation, nor anything else. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'Let there be freedom from perturbations with respect to the things\nwhich come from the external cause; and let there be justice in the\nthings done by virtue of the internal cause, that is, let there be\nmovement and action terminating in this, in social acts, for this\nis according to thy nature. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'Thou canst remove out of the way many useless things among those which\ndisturb thee, for they lie entirely in thy opinion; and thou wilt\nthen gain for thyself ample space by comprehending the whole universe\nin thy mind, and by contemplating the eternity of time, and observing\nthe rapid change of every several thing, how short is the time from\nbirth to dissolution, and the illimitable time before birth as well\nas the equally boundless time after dissolution. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'All that thou seest will quickly perish, and those who have been spectators\nof its dissolution will very soon perish too. And he who dies at the\nextremest old age will be brought into the same condition with him\nwho died prematurely. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      "What are these men's leading principles, and about what kind of things\nare they busy, and for what kind of reasons do they love and honour?\nImagine that thou seest their poor souls laid bare. When they think\nthat they do harm by their blame or good by their praise, what an\nidea! ",
  },
  {
    book: 'Book Nine',
    paragraph:
      'Loss is nothing else than change. But the universal nature delights\nin change, and in obedience to her all things are now done well, and\nfrom eternity have been done in like form, and will be such to time\nwithout end. What, then, dost thou say? That all things have been\nand all things always will be bad, and that no power has ever been\nfound in so many gods to rectify these things, but the world has been\ncondemned to be found in never ceasing evil? ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'The rottenness of the matter which is the foundation of everything!\nWater, dust, bones, filth: or again, marble rocks, the callosities\nof the earth; and gold and silver, the sediments; and garments, only\nbits of hair; and purple dye, blood; and everything else is of the\nsame kind. And that which is of the nature of breath is also another\nthing of the same kind, changing from this to that. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'Enough of this wretched life and murmuring and apish tricks. Why art\nthou disturbed? What is there new in this? What unsettles thee? Is\nit the form of the thing? Look at it. Or is it the matter? Look at\nit. But besides these there is nothing. Towards the gods, then, now\nbecome at last more simple and better. It is the same whether we examine\nthese things for a hundred years or three. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'If any man has done wrong, the harm is his own. But perhaps he has\nnot done wrong. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'Either all things proceed from one intelligent source and come together\nas in one body, and the part ought not to find fault with what is\ndone for the benefit of the whole; or there are only atoms, and nothing\nelse than mixture and dispersion. Why, then, art thou disturbed? Say\nto the ruling faculty, Art thou dead, art thou corrupted, art thou\nplaying the hypocrite, art thou become a beast, dost thou herd and\nfeed with the rest? ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'Either the gods have no power or they have power. If, then, they have\nno power, why dost thou pray to them? But if they have power, why\ndost thou not pray for them to give thee the faculty of not fearing\nany of the things which thou fearest, or of not desiring any of the\nthings which thou desirest, or not being pained at anything, rather\nthan pray that any of these things should not happen or happen? for\ncertainly if they can co-operate with men, they can co-operate for\nthese purposes. But perhaps thou wilt say, the gods have placed them\nin thy power. Well, then, is it not better to use what is in thy power\nlike a free man than to desire in a slavish and abject way what is\nnot in thy power? And who has told thee that the gods do not aid us\neven in the things which are in our power? Begin, then, to pray for\nsuch things, and thou wilt see. One man prays thus: How shall I be\nable to lie with that woman? Do thou pray thus: How shall I not desire\nto lie with her? Another prays thus: How shall I be released from\nthis? Another prays: How shall I not desire to be released? Another\nthus: How shall I not lose my little son? Thou thus: How shall I not\nbe afraid to lose him? In fine, turn thy prayers this way, and see\nwhat comes. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      'Epicurus says, In my sickness my conversation was not about my bodily\nsufferings, nor, says he, did I talk on such subjects to those who\nvisited me; but I continued to discourse on the nature of things as\nbefore, keeping to this main point, how the mind, while participating\nin such movements as go on in the poor flesh, shall be free from perturbations\nand maintain its proper good. Nor did I, he says, give the physicians\nan opportunity of putting on solemn looks, as if they were doing something\ngreat, but my life went on well and happily. Do, then, the same that\nhe did both in sickness, if thou art sick, and in any other circumstances;\nfor never to desert philosophy in any events that may befall us, nor\nto hold trifling talk either with an ignorant man or with one unacquainted\nwith nature, is a principle of all schools of philosophy; but to be\nintent only on that which thou art now doing and on the instrument\nby which thou doest it. ',
  },
  {
    book: 'Book Nine',
    paragraph:
      "When thou art offended with any man's shameless conduct, immediately\nask thyself, Is it possible, then, that shameless men should not be\nin the world? It is not possible. Do not, then, require what is impossible.\nFor this man also is one of those shameless men who must of necessity\nbe in the world. Let the same considerations be present to thy mind\nin the case of the knave, and the faithless man, and of every man\nwho does wrong in any way. For at the same time that thou dost remind\nthyself that it is impossible that such kind of men should not exist,\nthou wilt become more kindly disposed towards every one individually.\nIt is useful to perceive this, too, immediately when the occasion\narises, what virtue nature has given to man to oppose to every wrongful\nact. For she has given to man, as an antidote against the stupid man,\nmildness, and against another kind of man some other power. And in\nall cases it is possible for thee to correct by teaching the man who\nis gone astray; for every man who errs misses his object and is gone\nastray. Besides wherein hast thou been injured? For thou wilt find\nthat no one among those against whom thou art irritated has done anything\nby which thy mind could be made worse; but that which is evil to thee\nand harmful has its foundation only in the mind. And what harm is\ndone or what is there strange, if the man who has not been instructed\ndoes the acts of an uninstructed man? Consider whether thou shouldst\nnot rather blame thyself, because thou didst not expect such a man\nto err in such a way. For thou hadst means given thee by thy reason\nto suppose that it was likely that he would commit this error, and\nyet thou hast forgotten and art amazed that he has erred. But most\nof all when thou blamest a man as faithless or ungrateful, turn to\nthyself. For the fault is manifestly thy own, whether thou didst trust\nthat a man who had such a disposition would keep his promise, or when\nconferring thy kindness thou didst not confer it absolutely, nor yet\nin such way as to have received from thy very act all the profit.\nFor what more dost thou want when thou hast done a man a service?\nArt thou not content that thou hast done something conformable to\nthy nature, and dost thou seek to be paid for it? Just as if the eye\ndemanded a recompense for seeing, or the feet for walking. For as\nthese members are formed for a particular purpose, and by working\naccording to their several constitutions obtain what is their own;\nso also as man is formed by nature to acts of benevolence, when he\nhas done anything benevolent or in any other way conducive to the\ncommon interest, he has acted conformably to his constitution, and\nhe gets what is his own. ",
  },
  {
    book: 'Book Ten',
    paragraph:
      'Wilt thou, then, my soul, never be good and simple and one and naked,\nmore manifest than the body which surrounds thee? Wilt thou never\nenjoy an affectionate and contented disposition? Wilt thou never be\nfull and without a want of any kind, longing for nothing more, nor\ndesiring anything, either animate or inanimate, for the enjoyment\nof pleasures? Nor yet desiring time wherein thou shalt have longer\nenjoyment, or place, or pleasant climate, or society of men with whom\nthou mayest live in harmony? But wilt thou be satisfied with thy present\ncondition, and pleased with all that is about thee, and wilt thou\nconvince thyself that thou hast everything and that it comes from\nthe gods, that everything is well for thee, and will be well whatever\nshall please them, and whatever they shall give for the conservation\nof the perfect living being, the good and just and beautiful, which\ngenerates and holds together all things, and contains and embraces\nall things which are dissolved for the production of other like things?\nWilt thou never be such that thou shalt so dwell in community with\ngods and men as neither to find fault with them at all, nor to be\ncondemned by them? ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'Observe what thy nature requires, so far as thou art governed by nature\nonly: then do it and accept it, if thy nature, so far as thou art\na living being, shall not be made worse by it. ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'And next thou must observe what thy nature requires so far as thou\nart a living being. And all this thou mayest allow thyself, if thy\nnature, so far as thou art a rational animal, shall not be made worse\nby it. But the rational animal is consequently also a political (social)\nanimal. Use these rules, then, and trouble thyself about nothing else.',
  },
  {
    book: 'Book Ten',
    paragraph:
      'Everything which happens either happens in such wise as thou art formed\nby nature to bear it, or as thou art not formed by nature to bear\nit. If, then, it happens to thee in such way as thou art formed by\nnature to bear it, do not complain, but bear it as thou art formed\nby nature to bear it. But if it happens in such wise as thou art not\nformed by nature to bear it, do not complain, for it will perish after\nit has consumed thee. Remember, however, that thou art formed by nature\nto bear everything, with respect to which it depends on thy own opinion\nto make it endurable and tolerable, by thinking that it is either\nthy interest or thy duty to do this. ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'If a man is mistaken, instruct him kindly and show him his error.\nBut if thou art not able, blame thyself, or blame not even thyself.',
  },
  {
    book: 'Book Ten',
    paragraph:
      'Whatever may happen to thee, it was prepared for thee from all eternity;\nand the implication of causes was from eternity spinning the thread\nof thy being, and of that which is incident to it. ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'Whether the universe is a concourse of atoms, or nature is a system,\nlet this first be established, that I am a part of the whole which\nis governed by nature; next, I am in a manner intimately related to\nthe parts which are of the same kind with myself. For remembering\nthis, inasmuch as I am a part, I shall be discontented with none of\nthe things which are assigned to me out of the whole; for nothing\nis injurious to the part, if it is for the advantage of the whole.\nFor the whole contains nothing which is not for its advantage; and\nall natures indeed have this common principle, but the nature of the\nuniverse has this principle besides, that it cannot be compelled even\nby any external cause to generate anything harmful to itself. By remembering,\nthen, that I am a part of such a whole, I shall be content with everything\nthat happens. And inasmuch as I am in a manner intimately related\nto the parts which are of the same kind with myself, I shall do nothing\nunsocial, but I shall rather direct myself to the things which are\nof the same kind with myself, and I shall turn an my efforts to the\ncommon interest, and divert them from the contrary. Now, if these\nthings are done so, life must flow on happily, just as thou mayest\nobserve that the life of a citizen is happy, who continues a course\nof action which is advantageous to his fellow-citizens, and is content\nwith whatever the state may assign to him. ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'The parts of the whole, everything, I mean, which is naturally comprehended\nin the universe, must of necessity perish; but let this be understood\nin this sense, that they must undergo change. But if this is naturally\nboth an evil and a necessity for the parts, the whole would not continue\nto exist in a good condition, the parts being subject to change and\nconstituted so as to perish in various ways. For whether did nature\nherself design to do evil to the things which are parts of herself,\nand to make them subject to evil and of necessity fall into evil,\nor have such results happened without her knowing it? Both these suppositions,\nindeed, are incredible. But if a man should even drop the term Nature\n(as an efficient power), and should speak of these things as natural,\neven then it would be ridiculous to affirm at the same time that the\nparts of the whole are in their nature subject to change, and at the\nsame time to be surprised or vexed as if something were happening\ncontrary to nature, particularly as the dissolution of things is into\nthose things of which each thing is composed. For there is either\na dispersion of the elements out of which everything has been compounded,\nor a change from the solid to the earthy and from the airy to the\naerial, so that these parts are taken back into the universal reason,\nwhether this at certain periods is consumed by fire or renewed by\neternal changes. And do not imagine that the solid and the airy part\nbelong to thee from the time of generation. For all this received\nits accretion only yesterday and the day before, as one may say, from\nthe food and the air which is inspired. This, then, which has received\nthe accretion, changes, not that which thy mother brought forth. But\nsuppose that this which thy mother brought forth implicates thee very\nmuch with that other part, which has the peculiar quality of change,\nthis is nothing in fact in the way of objection to what is said.',
  },
  {
    book: 'Book Ten',
    paragraph:
      'When thou hast assumed these names, good, modest, true, rational,\na man of equanimity, and magnanimous, take care that thou dost not\nchange these names; and if thou shouldst lose them, quickly return\nto them. And remember that the term Rational was intended to signify\na discriminating attention to every several thing and freedom from\nnegligence; and that Equanimity is the voluntary acceptance of the\nthings which are assigned to thee by the common nature; and that Magnanimity\nis the elevation of the intelligent part above the pleasurable or\npainful sensations of the flesh, and above that poor thing called\nfame, and death, and all such things. If, then, thou maintainest thyself\nin the possession of these names, without desiring to be called by\nthese names by others, thou wilt be another person and wilt enter\non another life. For to continue to be such as thou hast hitherto\nbeen, and to be tom in pieces and defiled in such a life, is the character\nof a very stupid man and one overfond of his life, and like those\nhalf-devoured fighters with wild beasts, who though covered with wounds\nand gore, still intreat to be kept to the following day, though they\nwill be exposed in the same state to the same claws and bites. Therefore\nfix thyself in the possession of these few names: and if thou art\nable to abide in them, abide as if thou wast removed to certain islands\nof the Happy. But if thou shalt perceive that thou fallest out of\nthem and dost not maintain thy hold, go courageously into some nook\nwhere thou shalt maintain them, or even depart at once from life,\nnot in passion, but with simplicity and freedom and modesty, after\ndoing this one laudable thing at least in thy life, to have gone out\nof it thus. In order, however, to the remembrance of these names,\nit will greatly help thee, if thou rememberest the gods, and that\nthey wish not to be flattered, but wish all reasonable beings to be\nmade like themselves; and if thou rememberest that what does the work\nof a fig-tree is a fig-tree, and that what does the work of a dog\nis a dog, and that what does the work of a bee is a bee, and that\nwhat does the work of a man is a man. ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'Mimi, war, astonishment, torpor, slavery, will daily wipe out those\nholy principles of thine. How many things without studying nature\ndost thou imagine, and how many dost thou neglect? But it is thy duty\nso to look on and so to do everything, that at the same time the power\nof dealing with circumstances is perfected, and the contemplative\nfaculty is exercised, and the confidence which comes from the knowledge\nof each several thing is maintained without showing it, but yet not\nconcealed. For when wilt thou enjoy simplicity, when gravity, and\nwhen the knowledge of every several thing, both what it is in substance,\nand what place it has in the universe, and how long it is formed to\nexist and of what things it is compounded, and to whom it can belong,\nand who are able both to give it and take it away? ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'A spider is proud when it has caught a fly, and another when he has\ncaught a poor hare, and another when he has taken a little fish in\na net, and another when he has taken wild boars, and another when\nhe has taken bears, and another when he has taken Sarmatians. Are\nnot these robbers, if thou examinest their opinions? ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'Acquire the contemplative way of seeing how all things change into\none another, and constantly attend to it, and exercise thyself about\nthis part of philosophy. For nothing is so much adapted to produce\nmagnanimity. Such a man has put off the body, and as he sees that\nhe must, no one knows how soon, go away from among men and leave everything\nhere, he gives himself up entirely to just doing in all his actions,\nand in everything else that happens he resigns himself to the universal\nnature. But as to what any man shall say or think about him or do\nagainst him, he never even thinks of it, being himself contented with\nthese two things, with acting justly in what he now does, and being\nsatisfied with what is now assigned to him; and he lays aside all\ndistracting and busy pursuits, and desires nothing else than to accomplish\nthe straight course through the law, and by accomplishing the straight\ncourse to follow God. ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'What need is there of suspicious fear, since it is in thy power to\ninquire what ought to be done? And if thou seest clear, go by this\nway content, without turning back: but if thou dost not see clear,\nstop and take the best advisers. But if any other things oppose thee,\ngo on according to thy powers with due consideration, keeping to that\nwhich appears to be just. For it is best to reach this object, and\nif thou dost fail, let thy failure be in attempting this. He who follows\nreason in all things is both tranquil and active at the same time,\nand also cheerful and collected. ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'Inquire of thyself as soon as thou wakest from sleep, whether it will\nmake any difference to thee, if another does what is just and right.\nIt will make no difference. ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'Thou hast not forgotten, I suppose, that those who assume arrogant\nairs in bestowing their praise or blame on others, are such as they\nare at bed and at board, and thou hast not forgotten what they do,\nand what they avoid and what they pursue, and how they steal and how\nthey rob, not with hands and feet, but with their most valuable part,\nby means of which there is produced, when a man chooses, fidelity,\nmodesty, truth, law, a good daemon (happiness)? ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'To her who gives and takes back all, to nature, the man who is instructed\nand modest says, Give what thou wilt; take back what thou wilt. And\nhe says this not proudly, but obediently and well pleased with her.',
  },
  {
    book: 'Book Ten',
    paragraph:
      'Short is the little which remains to thee of life. Live as on a mountain.\nFor it makes no difference whether a man lives there or here, if he\nlives everywhere in the world as in a state (political community).\nLet men see, let them know a real man who lives according to nature.\nIf they cannot endure him, let them kill him. For that is better than\nto live thus as men do. ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'No longer talk at all about the kind of man that a good man ought\nto be, but be such. ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'Constantly contemplate the whole of time and the whole of substance,\nand consider that all individual things as to substance are a grain\nof a fig, and as to time, the turning of a gimlet. ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'Look at everything that exists, and observe that it is already in\ndissolution and in change, and as it were putrefaction or dispersion,\nor that everything is so constituted by nature as to die.',
  },
  {
    book: 'Book Ten',
    paragraph:
      'Consider what men are when they are eating, sleeping, generating,\neasing themselves and so forth. Then what kind of men they are when\nthey are imperious and arrogant, or angry and scolding from their\nelevated place. But a short time ago to how many they were slaves\nand for what things; and after a little time consider in what a condition\nthey will be. ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'That is for the good of each thing, which the universal nature brings\nto each. And it is for its good at the time when nature brings it.',
  },
  {
    book: 'Book Ten',
    paragraph:
      '"The earth loves the shower"; and "the solemn aether loves": and the\nuniverse loves to make whatever is about to be. I say then to the\nuniverse, that I love as thou lovest. And is not this too said, that\n"this or that loves (is wont) to be produced"? ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'Either thou livest here and hast already accustomed thyself to it,\nor thou art going away, and this was thy own will; or thou art dying\nand hast discharged thy duty. But besides these things there is nothing.\nBe of good cheer, then. ',
  },
  {
    book: 'Book Ten',
    paragraph:
      "Let this always be plain to thee, that this piece of land is like\nany other; and that all things here are the same with things on top\nof a mountain, or on the sea-shore, or wherever thou choosest to be.\nFor thou wilt find just what Plato says, Dwelling within the walls\nof a city as in a shepherd's fold on a mountain. ",
  },
  {
    book: 'Book Ten',
    paragraph:
      'What is my ruling faculty now to me? And of what nature am I now making\nit? And for what purpose am I now using it? Is it void of understanding?\nIs it loosed and rent asunder from social life? Is it melted into\nand mixed with the poor flesh so as to move together with it?',
  },
  {
    book: 'Book Ten',
    paragraph:
      'He who flies from his master is a runaway; but the law is master,\nand he who breaks the law is a runaway. And he also who is grieved\nor angry or afraid, is dissatisfied because something has been or\nis or shall be of the things which are appointed by him who rules\nall things, and he is Law, and assigns to every man what is fit. He\nthen who fears or is grieved or is angry is a runaway. ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'A man deposits seed in a womb and goes away, and then another cause\ntakes it, and labours on it and makes a child. What a thing from such\na material! Again, the child passes food down through the throat,\nand then another cause takes it and makes perception and motion, and\nin fine life and strength and other things; how many and how strange\nI Observe then the things which are produced in such a hidden way,\nand see the power just as we see the power which carries things downwards\nand upwards, not with the eyes, but still no less plainly.',
  },
  {
    book: 'Book Ten',
    paragraph:
      'Constantly consider how all things such as they now are, in time past\nalso were; and consider that they will be the same again. And place\nbefore thy eyes entire dramas and stages of the same form, whatever\nthou hast learned from thy experience or from older history; for example,\nthe whole court of Hadrian, and the whole court of Antoninus, and\nthe whole court of Philip, Alexander, Croesus; for all those were\nsuch dramas as we see now, only with different actors. ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'Imagine every man who is grieved at anything or discontented to be\nlike a pig which is sacrificed and kicks and screams. ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'Like this pig also is he who on his bed in silence laments the bonds\nin which we are held. And consider that only to the rational animal\nis it given to follow voluntarily what happens; but simply to follow\nis a necessity imposed on all. ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'Severally on the occasion of everything that thou doest, pause and\nask thyself, if death is a dreadful thing because it deprives thee\nof this. ',
  },
  {
    book: 'Book Ten',
    paragraph:
      "When thou art offended at any man's fault, forthwith turn to thyself\nand reflect in what like manner thou dost err thyself; for example,\nin thinking that money is a good thing, or pleasure, or a bit of reputation,\nand the like. For by attending to this thou wilt quickly forget thy\nanger, if this consideration also is added, that the man is compelled:\nfor what else could he do? or, if thou art able, take away from him\nthe compulsion. ",
  },
  {
    book: 'Book Ten',
    paragraph:
      'When thou hast seen Satyron the Socratic, think of either Eutyches\nor Hymen, and when thou hast seen Euphrates, think of Eutychion or\nSilvanus, and when thou hast seen Alciphron think of Tropaeophorus,\nand when thou hast seen Xenophon think of Crito or Severus, and when\nthou hast looked on thyself, think of any other Caesar, and in the\ncase of every one do in like manner. Then let this thought be in thy\nmind, Where then are those men? Nowhere, or nobody knows where. For\nthus continuously thou wilt look at human things as smoke and nothing\nat all; especially if thou reflectest at the same time that what has\nonce changed will never exist again in the infinite duration of time.\nBut thou, in what a brief space of time is thy existence? And why\nart thou not content to pass through this short time in an orderly\nway? What matter and opportunity for thy activity art thou avoiding?\nFor what else are all these things, except exercises for the reason,\nwhen it has viewed carefully and by examination into their nature\nthe things which happen in life? Persevere then until thou shalt have\nmade these things thy own, as the stomach which is strengthened makes\nall things its own, as the blazing fire makes flame and brightness\nout of everything that is thrown into it. ',
  },
  {
    book: 'Book Ten',
    paragraph:
      "Let it not be in any man's power to say truly of thee that thou art\nnot simple or that thou are not good; but let him be a liar whoever\nshall think anything of this kind about thee; and this is altogether\nin thy power. For who is he that shall hinder thee from being good\nand simple? Do thou only determine to live no longer, unless thou\nshalt be such. For neither does reason allow thee to live, if thou\nart not such. ",
  },
  {
    book: 'Book Ten',
    paragraph:
      "What is that which as to this material (our life) can be done or said\nin the way most conformable to reason. For whatever this may be, it\nis in thy power to do it or to say it, and do not make excuses that\nthou art hindered. Thou wilt not cease to lament till thy mind is\nin such a condition that, what luxury is to those who enjoy pleasure,\nsuch shall be to thee, in the matter which is subjected and presented\nto thee, the doing of the things which are conformable to man's constitution;\nfor a man ought to consider as an enjoyment everything which it is\nin his power to do according to his own nature. And it is in his power\neverywhere. Now, it is not given to a cylinder to move everywhere\nby its own motion, nor yet to water nor to fire, nor to anything else\nwhich is governed by nature or an irrational soul, for the things\nwhich check them and stand in the way are many. But intelligence and\nreason are able to go through everything that opposes them, and in\nsuch manner as they are formed by nature and as they choose. Place\nbefore thy eyes this facility with which the reason will be carried\nthrough all things, as fire upwards, as a stone downwards, as a cylinder\ndown an inclined surface, and seek for nothing further. For all other\nobstacles either affect the body only which is a dead thing; or, except\nthrough opinion and the yielding of the reason itself, they do not\ncrush nor do any harm of any kind; for if they did, he who felt it\nwould immediately become bad. Now, in the case of all things which\nhave a certain constitution, whatever harm may happen to any of them,\nthat which is so affected becomes consequently worse; but in the like\ncase, a man becomes both better, if one may say so, and more worthy\nof praise by making a right use of these accidents. And finally remember\nthat nothing harms him who is really a citizen, which does not harm\nthe state; nor yet does anything harm the state, which does not harm\nlaw (order); and of these things which are called misfortunes not\none harms law. What then does not harm law does not harm either state\nor citizen. ",
  },
  {
    book: 'Book Ten',
    paragraph:
      'To him who is penetrated by true principles even the briefest precept\nis sufficient, and any common precept, to remind him that he should\nbe free from grief and fear. For example- ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'Leaves, some the wind scatters on the ground- \nSo is the race of men. Leaves, also, are thy children; and leaves,\ntoo, are they who cry out as if they were worthy of credit and bestow\ntheir praise, or on the contrary curse, or secretly blame and sneer;\nand leaves, in like manner, are those who shall receive and transmit\na man\'s fame to aftertimes. For all such things as these "are produced\nin the season of spring," as the poet says; then the wind casts them\ndown; then the forest produces other leaves in their places. But a\nbrief existence is common to all things, and yet thou avoidest and\npursuest all things as if they would be eternal. A little time, and\nthou shalt close thy eyes; and him who has attended thee to thy grave\nanother soon will lament. ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'The healthy eye ought to see all visible things and not to say, I\nwish for green things; for this is the condition of a diseased eye.\nAnd the healthy hearing and smelling ought to be ready to perceive\nall that can be heard and smelled. And the healthy stomach ought to\nbe with respect to all food just as the mill with respect to all things\nwhich it is formed to grind. And accordingly the healthy understanding\nought to be prepared for everything which happens; but that which\nsays, Let my dear children live, and let all men praise whatever I\nmay do, is an eye which seeks for green things, or teeth which seek\nfor soft things. ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'There is no man so fortunate that there shall not be by him when he\nis dying some who are pleased with what is going to happen. Suppose\nthat he was a good and wise man, will there not be at last some one\nto say to himself, Let us at last breathe freely being relieved from\nthis schoolmaster? It is true that he was harsh to none of us, but\nI perceived that he tacitly condemns us.- This is what is said of\na good man. But in our own case how many other things are there for\nwhich there are many who wish to get rid of us. Thou wilt consider\nthis then when thou art dying, and thou wilt depart more contentedly\nby reflecting thus: I am going away from such a life, in which even\nmy associates in behalf of whom I have striven so much, prayed, and\ncared, themselves wish me to depart, hoping perchance to get some\nlittle advantage by it. Why then should a man cling to a longer stay\nhere? Do not however for this reason go away less kindly disposed\nto them, but preserving thy own character, and friendly and benevolent\nand mild, and on the other hand not as if thou wast torn away; but\nas when a man dies a quiet death, the poor soul is easily separated\nfrom the body, such also ought thy departure from men to be, for nature\nunited thee to them and associated thee. But does she now dissolve\nthe union? Well, I am separated as from kinsmen, not however dragged\nresisting, but without compulsion; for this too is one of the things\naccording to nature. ',
  },
  {
    book: 'Book Ten',
    paragraph:
      'Accustom thyself as much as possible on the occasion of anything being\ndone by any person to inquire with thyself, For what object is this\nman doing this? But begin with thyself, and examine thyself first.',
  },
  {
    book: 'Book Ten',
    paragraph:
      "Remember that this which pulls the strings is the thing which is hidden\nwithin: this is the power of persuasion, this is life, this, if one\nmay so say, is man. In contemplating thyself never include the vessel\nwhich surrounds thee and these instruments which are attached about\nit. For they are like to an axe, differing only in this that they\ngrow to the body. For indeed there is no more use in these parts without\nthe cause which moves and checks them than in the weaver's shuttle,\nand the writer's pen and the driver's whip. ",
  },
  {
    book: 'Book Eleven',
    paragraph:
      "These are the properties of the rational soul: it sees itself, analyses\nitself, and makes itself such as it chooses; the fruit which it bears\nitself enjoys- for the fruits of plants and that in animals which\ncorresponds to fruits others enjoy- it obtains its own end, wherever\nthe limit of life may be fixed. Not as in a dance and in a play and\nin such like things, where the whole action is incomplete, if anything\ncuts it short; but in every part and wherever it may be stopped, it\nmakes what has been set before it full and complete, so that it can\nsay, I have what is my own. And further it traverses the whole universe,\nand the surrounding vacuum, and surveys its form, and it extends itself\ninto the infinity of time, and embraces and comprehends the periodical\nrenovation of all things, and it comprehends that those who come after\nus will see nothing new, nor have those before us seen anything more,\nbut in a manner he who is forty years old, if he has any understanding\nat all, has seen by virtue of the uniformity that prevails all things\nwhich have been and all that will be. This too is a property of the\nrational soul, love of one's neighbour, and truth and modesty, and\nto value nothing more more than itself, which is also the property\nof Law. Thus then right reason differs not at all from the reason\nof justice. ",
  },
  {
    book: 'Book Eleven',
    paragraph:
      'Thou wilt set little value on pleasing song and dancing and the pancratium,\nif thou wilt distribute the melody of the voice into its several sounds,\nand ask thyself as to each, if thou art mastered by this; for thou\nwilt be prevented by shame from confessing it: and in the matter of\ndancing, if at each movement and attitude thou wilt do the same; and\nthe like also in the matter of the pancratium. In all things, then,\nexcept virtue and the acts of virtue, remember to apply thyself to\ntheir several parts, and by this division to come to value them little:\nand apply this rule also to thy whole life. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      "What a soul that is which is ready, if at any moment it must be separated\nfrom the body, and ready either to be extinguished or dispersed or\ncontinue to exist; but so that this readiness comes from a man's own\njudgement, not from mere obstinacy, as with the Christians, but considerately\nand with dignity and in a way to persuade another, without tragic\nshow. ",
  },
  {
    book: 'Book Eleven',
    paragraph:
      'Have I done something for the general interest? Well then I have had\nmy reward. Let this always be present to thy mind, and never stop\ndoing such good. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'What is thy art? To be good. And how is this accomplished well except\nby general principles, some about the nature of the universe, and\nothers about the proper constitution of man? ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'At first tragedies were brought on the stage as means of reminding\nmen of the things which happen to them, and that it is according to\nnature for things to happen so, and that, if you are delighted with\nwhat is shown on the stage, you should not be troubled with that which\ntakes place on the larger stage. For you see that these things must\nbe accomplished thus, and that even they bear them who cry out "O\nCithaeron." And, indeed, some things are said well by the dramatic\nwriters, of which kind is the following especially:- ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'Me and my children if the gods neglect, \nThis has its reason too. And again- ',
  },
  {
    book: 'Book Eleven',
    paragraph: 'We must not chale and fret at that which happens. And ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      "Life's harvest reap like the wheat's fruitful ear. And other things\nof the same kind. ",
  },
  {
    book: 'Book Eleven',
    paragraph:
      'After tragedy the old comedy was introduced, which had a magisterial\nfreedom of speech, and by its very plainness of speaking was useful\nin reminding men to beware of insolence; and for this purpose too\nDiogenes used to take from these writers. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'But as to the middle comedy which came next, observe what it was,\nand again, for what object the new comedy was introduced, which gradually\nsunk down into a mere mimic artifice. That some good things are said\neven by these writers, everybody knows: but the whole plan of such\npoetry and dramaturgy, to what end does it look! ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'How plain does it appear that there is not another condition of life\nso well suited for philosophising as this in which thou now happenest\nto be. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'A branch cut off from the adjacent branch must of necessity be cut\noff from the whole tree also. So too a man when he is separated from\nanother man has fallen off from the whole social community. Now as\nto a branch, another cuts it off, but a man by his own act separates\nhimself from his neighbour when he hates him and turns away from him,\nand he does not know that he has at the same time cut himself off\nfrom the whole social system. Yet he has this privilege certainly\nfrom Zeus who framed society, for it is in our power to grow again\nto that which is near to us, and be to come a part which helps to\nmake up the whole. However, if it often happens, this kind of separation,\nit makes it difficult for that which detaches itself to be brought\nto unity and to be restored to its former condition. Finally, the\nbranch, which from the first grew together with the tree, and has\ncontinued to have one life with it, is not like that which after being\ncut off is then ingrafted, for this is something like what the gardeners\nmean when they say that it grows with the rest of the tree, but that\nit has not the same mind with it. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'As those who try to stand in thy way when thou art proceeding according\nto right reason, will not be able to turn thee aside from thy proper\naction, so neither let them drive thee from thy benevolent feelings\ntowards them, but be on thy guard equally in both matters, not only\nin the matter of steady judgement and action, but also in the matter\nof gentleness towards those who try to hinder or otherwise trouble\nthee. For this also is a weakness, to be vexed at them, as well as\nto be diverted from thy course of action and to give way through fear;\nfor both are equally deserters from their post, the man who does it\nthrough fear, and the man who is alienated from him who is by nature\na kinsman and a friend. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'There is no nature which is inferior to art, for the arts imitate\nthe nature of things. But if this is so, that nature which is the\nmost perfect and the most comprehensive of all natures, cannot fall\nshort of the skill of art. Now all arts do the inferior things for\nthe sake of the superior; therefore the universal nature does so too.\nAnd, indeed, hence is the origin of justice, and in justice the other\nvirtues have their foundation: for justice will not be observed, if\nwe either care for middle things (things indifferent), or are easily\ndeceived and careless and changeable. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'If the things do not come to thee, the pursuits and avoidances of\nwhich disturb thee, still in a manner thou goest to them. Let then\nthy judgement about them be at rest, and they will remain quiet, and\nthou wilt not be seen either pursuing or avoiding. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'The spherical form of the soul maintains its figure, when it is neither\nextended towards any object, nor contracted inwards, nor dispersed\nnor sinks down, but is illuminated by light, by which it sees the\ntruth, the truth of all things and the truth that is in itself.',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'Suppose any man shall despise me. Let him look to that himself. But\nI will look to this, that I be not discovered doing or saying anything\ndeserving of contempt. Shall any man hate me? Let him look to it.\nBut I will be mild and benevolent towards every man, and ready to\nshow even him his mistake, not reproachfully, nor yet as making a\ndisplay of my endurance, but nobly and honestly, like the great Phocion,\nunless indeed he only assumed it. For the interior parts ought to\nbe such, and a man ought to be seen by the gods neither dissatisfied\nwith anything nor complaining. For what evil is it to thee, if thou\nart now doing what is agreeable to thy own nature, and art satisfied\nwith that which at this moment is suitable to the nature of the universe,\nsince thou art a human being placed at thy post in order that what\nis for the common advantage may be done in some way? ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'Men despise one another and flatter one another; and men wish to raise\nthemselves above one another, and crouch before one another.',
  },
  {
    book: 'Book Eleven',
    paragraph:
      "How unsound and insincere is he who says, I have determined to deal\nwith thee in a fair way.- What art thou doing, man? There is no occasion\nto give this notice. It will soon show itself by acts. The voice ought\nto be plainly written on the forehead. Such as a man's character is,\nhe immediately shows it in his eyes, just as he who is beloved forthwith\nreads everything in the eyes of lovers. The man who is honest and\ngood ought to be exactly like a man who smells strong, so that the\nbystander as soon as he comes near him must smell whether he choose\nor not. But the affectation of simplicity is like a crooked stick.\nNothing is more disgraceful than a wolfish friendship (false friendship).\nAvoid this most of all. The good and simple and benevolent show all\nthese things in the eyes, and there is no mistaking. ",
  },
  {
    book: 'Book Eleven',
    paragraph:
      'As to living in the best way, this power is in the soul, if it be\nindifferent to things which are indifferent. And it will be indifferent,\nif it looks on each of these things separately and all together, and\nif it remembers that not one of them produces in us an opinion about\nitself, nor comes to us; but these things remain immovable, and it\nis we ourselves who produce the judgements about them, and, as we\nmay say, write them in ourselves, it being in our power not to write\nthem, and it being in our power, if perchance these judgements have\nimperceptibly got admission to our minds, to wipe them out; and if\nwe remember also that such attention will only be for a short time,\nand then life will be at an end. Besides, what trouble is there at\nall in doing this? For if these things are according to nature, rejoice\nin them, and they will be easy to thee: but if contrary to nature,\nseek what is conformable to thy own nature, and strive towards this,\neven if it bring no reputation; for every man is allowed to seek his\nown good. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'Consider whence each thing is come, and of what it consists, and into\nwhat it changes, and what kind of a thing it will be when it has changed,\nand that it will sustain no harm. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'If any have offended against thee, consider first: What is my relation\nto men, and that we are made for one another; and in another respect,\nI was made to be set over them, as a ram over the flock or a bull\nover the herd. But examine the matter from first principles, from\nthis: If all things are not mere atoms, it is nature which orders\nall things: if this is so, the inferior things exist for the sake\nof the superior, and these for the sake of one another. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'Second, consider what kind of men they are at table, in bed, and so\nforth: and particularly, under what compulsions in respect of opinions\nthey are; and as to their acts, consider with what pride they do what\nthey do. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'Third, that if men do rightly what they do, we ought not to be displeased;\nbut if they do not right, it is plain that they do so involuntarily\nand in ignorance. For as every soul is unwillingly deprived of the\ntruth, so also is it unwillingly deprived of the power of behaving\nto each man according to his deserts. Accordingly men are pained when\nthey are called unjust, ungrateful, and greedy, and in a word wrong-doers\nto their neighbours. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'Fourth, consider that thou also doest many things wrong, and that\nthou art a man like others; and even if thou dost abstain from certain\nfaults, still thou hast the disposition to commit them, though either\nthrough cowardice, or concern about reputation, or some such mean\nmotive, thou dost abstain from such faults. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      "Fifth, consider that thou dost not even understand whether men are\ndoing wrong or not, for many things are done with a certain reference\nto circumstances. And in short, a man must learn a great deal to enable\nhim to pass a correct judgement on another man's acts. ",
  },
  {
    book: 'Book Eleven',
    paragraph:
      "Sixth, consider when thou art much vexed or grieved, that man's life\nis only a moment, and after a short time we are all laid out dead.",
  },
  {
    book: 'Book Eleven',
    paragraph:
      "Seventh, that it is not men's acts which disturb us, for those acts\nhave their foundation in men's ruling principles, but it is our own\nopinions which disturb us. Take away these opinions then, and resolve\nto dismiss thy judgement about an act as if it were something grievous,\nand thy anger is gone. How then shall I take away these opinions?\nBy reflecting that no wrongful act of another brings shame on thee:\nfor unless that which is shameful is alone bad, thou also must of\nnecessity do many things wrong, and become a robber and everything\nelse. ",
  },
  {
    book: 'Book Eleven',
    paragraph:
      'Eighth, consider how much more pain is brought on us by the anger\nand vexation caused by such acts than by the acts themselves, at which\nwe are angry and vexed. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'Ninth, consider that a good disposition is invincible, if it be genuine,\nand not an affected smile and acting a part. For what will the most\nviolent man do to thee, if thou continuest to be of a kind disposition\ntowards him, and if, as opportunity offers, thou gently admonishest\nhim and calmly correctest his errors at the very time when he is trying\nto do thee harm, saying, Not so, my child: we are constituted by nature\nfor something else: I shall certainly not be injured, but thou art\ninjuring thyself, my child.- And show him with gentle tact and by\ngeneral principles that this is so, and that even bees do not do as\nhe does, nor any animals which are formed by nature to be gregarious.\nAnd thou must do this neither with any double meaning nor in the way\nof reproach, but affectionately and without any rancour in thy soul;\nand not as if thou wert lecturing him, nor yet that any bystander\nmay admire, but either when he is alone, and if others are present...',
  },
  {
    book: 'Book Eleven',
    paragraph:
      "Remember these nine rules, as if thou hadst received them as a gift\nfrom the Muses, and begin at last to be a man while thou livest. But\nthou must equally avoid flattering men and being veied at them, for\nboth are unsocial and lead to harm. And let this truth be present\nto thee in the excitement of anger, that to be moved by passion is\nnot manly, but that mildness and gentleness, as they are more agreeable\nto human nature, so also are they more manly; and he who possesses\nthese qualities possesses strength, nerves and courage, and not the\nman who is subject to fits of passion and discontent. For in the same\ndegree in which a man's mind is nearer to freedom from all passion,\nin the same degree also is it nearer to strength: and as the sense\nof pain is a characteristic of weakness, so also is anger. For he\nwho yields to pain and he who yields to anger, both are wounded and\nboth submit. ",
  },
  {
    book: 'Book Eleven',
    paragraph:
      'But if thou wilt, receive also a tenth present from the leader of\nthe Muses (Apollo), and it is this- that to expect bad men not to\ndo wrong is madness, for he who expects this desires an impossibility.\nBut to allow men to behave so to others, and to expect them not to\ndo thee any wrong, is irrational and tyrannical. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'There are four principal aberrations of the superior faculty against\nwhich thou shouldst be constantly on thy guard, and when thou hast\ndetected them, thou shouldst wipe them out and say on each occasion\nthus: this thought is not necessary: this tends to destroy social\nunion: this which thou art going to say comes not from the real thoughts;\nfor thou shouldst consider it among the most absurd of things for\na man not to speak from his real thoughts. But the fourth is when\nthou shalt reproach thyself for anything, for this is an evidence\nof the diviner part within thee being overpowered and yielding to\nthe less honourable and to the perishable part, the body, and to its\ngross pleasures. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'Thy aerial part and all the fiery parts which are mingled in thee,\nthough by nature they have an upward tendency, still in obedience\nto the disposition of the universe they are overpowered here in the\ncompound mass (the body). And also the whole of the earthy part in\nthee and the watery, though their tendency is downward, still are\nraised up and occupy a position which is not their natural one. In\nthis manner then the elemental parts obey the universal, for when\nthey have been fixed in any place perforce they remain there until\nagain the universal shall sound the signal for dissolution. Is it\nnot then strange that thy intelligent part only should be disobedient\nand discontented with its own place? And yet no force is imposed on\nit, but only those things which are conformable to its nature: still\nit does not submit, but is carried in the opposite direction. For\nthe movement towards injustice and intemperance and to anger and grief\nand fear is nothing else than the act of one who deviates from nature.\nAnd also when the ruling faculty is discontented with anything that\nhappens, then too it deserts its post: for it is constituted for piety\nand reverence towards the gods no less than for justice. For these\nqualities also are comprehended under the generic term of contentment\nwith the constitution of things, and indeed they are prior to acts\nof justice. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'He who has not one and always the same object in life, cannot be one\nand the same all through his life. But what I have said is not enough,\nunless this also is added, what this object ought to be. For as there\nis not the same opinion about all the things which in some way or\nother are considered by the majority to be good, but only about some\ncertain things, that is, things which concern the common interest;\nso also ought we to propose to ourselves an object which shall be\nof a common kind (social) and political. For he who directs all his\nown efforts to this object, will make all his acts alike, and thus\nwill always be the same. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'Think of the country mouse and of the town mouse, and of the alarm\nand trepidation of the town mouse. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'Socrates used to call the opinions of the many by the name of Lamiae,\nbugbears to frighten children. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'The Lacedaemonians at their public spectacles used to set seats in\nthe shade for strangers, but themselves sat down anywhere.',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'Socrates excused himself to Perdiccas for not going to him, saying,\nIt is because I would not perish by the worst of all ends, that is,\nI would not receive a favour and then be unable to return it.',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'In the writings of the Ephesians there was this precept, constantly\nto think of some one of the men of former times who practised virtue.',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'The Pythagoreans bid us in the morning look to the heavens that we\nmay be reminded of those bodies which continually do the same things\nand in the same manner perform their work, and also be reminded of\ntheir purity and nudity. For there is no veil over a star.',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'Consider what a man Socrates was when he dressed himself in a skin,\nafter Xanthippe had taken his cloak and gone out, and what Socrates\nsaid to his friends who were ashamed of him and drew back from him\nwhen they saw him dressed thus. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'Neither in writing nor in reading wilt thou be able to lay down rules\nfor others before thou shalt have first learned to obey rules thyself.\nMuch more is this so in life. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      "A slave thou art: free speech is not for thee. \nAnd my heart laughed within. \nAnd virtue they will curse, speaking harsh words. \nTo look for the fig in winter is a madman's act: such is he who looks\nfor his child when it is no longer allowed. ",
  },
  {
    book: 'Book Eleven',
    paragraph:
      'When a man kisses his child, said Epictetus, he should whisper to\nhimself, "To-morrow perchance thou wilt die."- But those are words\nof bad omen.- "No word is a word of bad omen," said Epictetus, "which\nexpresses any work of nature; or if it is so, it is also a word of\nbad omen to speak of the ears of corn being reaped." ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'The unripe grape, the ripe bunch, the dried grape, all are changes,\nnot into nothing, but into something which exists not yet.',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'No man can rob us of our free will. \nEpictetus also said, A man must discover an art (or rules) with respect\nto giving his assent; and in respect to his movements he must be careful\nthat they be made with regard to circumstances, that they be consistent\nwith social interests, that they have regard to the value of the object;\nand as to sensual desire, he should altogether keep away from it;\nand as to avoidance (aversion) he should not show it with respect\nto any of the things which are not in our power. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'The dispute then, he said, is not about any common matter, but about\nbeing mad or not. ',
  },
  {
    book: 'Book Eleven',
    paragraph:
      'Socrates used to say, What do you want? Souls of rational men or irrational?-\nSouls of rational men.- Of what rational men? Sound or unsound?- Sound.-\nWhy then do you not seek for them?- Because we have them.- Why then\ndo you fight and quarrel? ',
  },
  {
    book: 'Book Twelve',
    paragraph:
      "All those things at which thou wishest to arrive by a circuitous\nroad, thou canst have now, if thou dost not refuse them to thyself.\nAnd this means, if thou wilt take no notice of all the past, and trust\nthe future to providence, and direct the present only conformably\nto piety and justice. Conformably to piety, that thou mayest be content\nwith the lot which is assigned to thee, for nature designed it for\nthee and thee for it. Conformably to justice, that thou mayest always\nspeak the truth freely and without disguise, and do the things which\nare agreeable to law and according to the worth of each. And let neither\nanother man's wickedness hinder thee, nor opinion nor voice, nor yet\nthe sensations of the poor flesh which has grown about thee; for the\npassive part will look to this. If then, whatever the time may be\nwhen thou shalt be near to thy departure, neglecting everything else\nthou shalt respect only thy ruling faculty and the divinity within\nthee, and if thou shalt be afraid not because thou must some time\ncease to live, but if thou shalt fear never to have begun to live\naccording to nature- then thou wilt be a man worthy of the universe\nwhich has produced thee, and thou wilt cease to be a stranger in thy\nnative land, and to wonder at things which happen daily as if they\nwere something unexpected, and to be dependent on this or that.",
  },
  {
    book: 'Book Twelve',
    paragraph:
      'God sees the minds (ruling principles) of all men bared of the material\nvesture and rind and impurities. For with his intellectual part alone\nhe touches the intelligence only which has flowed and been derived\nfrom himself into these bodies. And if thou also usest thyself to\ndo this, thou wilt rid thyself of thy much trouble. For he who regards\nnot the poor flesh which envelops him, surely will not trouble himself\nby looking after raiment and dwelling and fame and such like externals\nand show. ',
  },
  {
    book: 'Book Twelve',
    paragraph:
      "The things are three of which thou art composed, a little body, a\nlittle breath (life), intelligence. Of these the first two are thine,\nso far as it is thy duty to take care of them; but the third alone\nis properly thine. Therefore if thou shalt separate from thyself,\nthat is, from thy understanding, whatever others do or say, and whatever\nthou hast done or said thyself, and whatever future things trouble\nthee because they may happen, and whatever in the body which envelops\nthee or in the breath (life), which is by nature associated with the\nbody, is attached to thee independent of thy will, and whatever the\nexternal circumfluent vortex whirls round, so that the intellectual\npower exempt from the things of fate can live pure and free by itself,\ndoing what is just and accepting what happens and saying the truth:\nif thou wilt separate, I say, from this ruling faculty the things\nwhich are attached to it by the impressions of sense, and the things\nof time to come and of time that is past, and wilt make thyself like\nEmpedocles' sphere, ",
  },
  {
    book: 'Book Twelve',
    paragraph:
      'All round, and in its joyous rest reposing; and if thou shalt strive\nto live only what is really thy life, that is, the present- then thou\nwilt be able to pass that portion of life which remains for thee up\nto the time of thy death, free from perturbations, nobly, and obedient\nto thy own daemon (to the god that is within thee). ',
  },
  {
    book: 'Book Twelve',
    paragraph:
      'I have often wondered how it is that every man loves himself more\nthan all the rest of men, but yet sets less value on his own opinion\nof himself than on the opinion of others. If then a god or a wise\nteacher should present himself to a man and bid him to think of nothing\nand to design nothing which he would not express as soon as he conceived\nit, he could not endure it even for a single day. So much more respect\nhave we to what our neighbours shall think of us than to what we shall\nthink of ourselves. ',
  },
  {
    book: 'Book Twelve',
    paragraph:
      'How can it be that the gods after having arranged all things well\nand benevolently for mankind, have overlooked this alone, that some\nmen and very good men, and men who, as we may say, have had most communion\nwith the divinity, and through pious acts and religious observances\nhave been most intimate with the divinity, when they have once died\nshould never exist again, but should be completely extinguished?',
  },
  {
    book: 'Book Twelve',
    paragraph:
      'But if this is so, be assured that if it ought to have been otherwise,\nthe gods would have done it. For if it were just, it would also be\npossible; and if it were according to nature, nature would have had\nit so. But because it is not so, if in fact it is not so, be thou\nconvinced that it ought not to have been so:- for thou seest even\nof thyself that in this inquiry thou art disputing with the diety;\nand we should not thus dispute with the gods, unless they were most\nexcellent and most just;- but if this is so, they would not have allowed\nanything in the ordering of the universe to be neglected unjustly\nand irrationally. ',
  },
  {
    book: 'Book Twelve',
    paragraph:
      'Practise thyself even in the things which thou despairest of accomplishing.\nFor even the left hand, which is ineffectual for all other things\nfor want of practice, holds the bridle more vigorously than the right\nhand; for it has been practised in this. ',
  },
  {
    book: 'Book Twelve',
    paragraph:
      'Consider in what condition both in body and soul a man should be when\nhe is overtaken by death; and consider the shortness of life, the\nboundless abyss of time past and future, the feebleness of all matter.',
  },
  {
    book: 'Book Twelve',
    paragraph:
      'Contemplate the formative principles (forms) of things bare of their\ncoverings; the purposes of actions; consider what pain is, what pleasure\nis, and death, and fame; who is to himself the cause of his uneasiness;\nhow no man is hindered by another; that everything is opinion.',
  },
  {
    book: 'Book Twelve',
    paragraph:
      'In the application of thy principles thou must be like the pancratiast,\nnot like the gladiator; for the gladiator lets fall the sword which\nhe uses and is killed; but the other always has his hand, and needs\nto do nothing else than use it. ',
  },
  {
    book: 'Book Twelve',
    paragraph:
      'See what things are in themselves, dividing them into matter, form\nand purpose. ',
  },
  {
    book: 'Book Twelve',
    paragraph:
      'What a power man has to do nothing except what God will approve, and\nto accept all that God may give him. ',
  },
  {
    book: 'Book Twelve',
    paragraph:
      'With respect to that which happens conformably to nature, we ought\nto blame neither gods, for they do nothing wrong either voluntarily\nor involuntarily, nor men, for they do nothing wrong except involuntarily.\nConsequently we should blame nobody. ',
  },
  {
    book: 'Book Twelve',
    paragraph:
      'How ridiculous and what a stranger he is who is surprised at anything\nwhich happens in life. ',
  },
  {
    book: 'Book Twelve',
    paragraph:
      'Either there is a fatal necessity and invincible order, or a kind\nProvidence, or a confusion without a purpose and without a director\n(Book IV). If then there is an invincible necessity, why dost thou\nresist? But if there is a Providence which allows itself to be propitiated,\nmake thyself worthy of the help of the divinity. But if there is a\nconfusion without governor, be content that in such a tempest thou\nhast in thyself a certain ruling intelligence. And even if the tempest\ncarry thee away, let it carry away the poor flesh, the poor breath,\neverything else; for the intelligence at least it will not carry away.',
  },
  {
    book: 'Book Twelve',
    paragraph:
      'Does the light of the lamp shine without losing its splendour until\nit is extinguished; and shall the truth which is in thee and justice\nand temperance be extinguished before thy death? ',
  },
  {
    book: 'Book Twelve',
    paragraph:
      "When a man has presented the appearance of having done wrong, say,\nHow then do I know if this is a wrongful act? And even if he has done\nwrong, how do I know that he has not condemned himself? and so this\nis like tearing his own face. Consider that he, who would not have\nthe bad man do wrong, is like the man who would not have the fig-tree\nto bear juice in the figs and infants to cry and the horse to neigh,\nand whatever else must of necessity be. For what must a man do who\nhas such a character? If then thou art irritable, cure this man's\ndisposition. ",
  },
  {
    book: 'Book Twelve',
    paragraph:
      'If it is not right, do not do it: if it is not true, do not say it.\nFor let thy efforts be- ',
  },
  {
    book: 'Book Twelve',
    paragraph:
      'In everything always observe what the thing is which produces for\nthee an appearance, and resolve it by dividing it into the formal,\nthe material, the purpose, and the time within which it must end.',
  },
  {
    book: 'Book Twelve',
    paragraph:
      'Perceive at last that thou hast in thee something better and more\ndivine than the things which cause the various affects, and as it\nwere pull thee by the strings. What is there now in my mind? Is it\nfear, or suspicion, or desire, or anything of the kind? ',
  },
  {
    book: 'Book Twelve',
    paragraph:
      'First, do nothing inconsiderately, nor without a purpose. Second,\nmake thy acts refer to nothing else than to a social end.',
  },
  {
    book: 'Book Twelve',
    paragraph:
      'Consider that before long thou wilt be nobody and nowhere, nor will\nany of the things exist which thou now seest, nor any of those who\nare now living. For all things are formed by nature to change and\nbe turned and to perish in order that other things in continuous succession\nmay exist. ',
  },
  {
    book: 'Book Twelve',
    paragraph:
      'Consider that everything is opinion, and opinion is in thy power.\nTake away then, when thou choosest, thy opinion, and like a mariner,\nwho has doubled the promontory, thou wilt find calm, everything stable,\nand a waveless bay. ',
  },
  {
    book: 'Book Twelve',
    paragraph:
      'Any one activity whatever it may be, when it has ceased at its proper\ntime, suffers no evil because it has ceased; nor he who has done this\nact, does he suffer any evil for this reason that the act has ceased.\nIn like manner then the whole which consists of all the acts, which\nis our life, if it cease at its proper time, suffers no evil for this\nreason that it has ceased; nor he who has terminated this series at\nthe proper time, has he been ill dealt with. But the proper time and\nthe limit nature fixes, sometimes as in old age the peculiar nature\nof man, but always the universal nature, by the change of whose parts\nthe whole universe continues ever young and perfect. And everything\nwhich is useful to the universal is always good and in season. Therefore\nthe termination of life for every man is no evil, because neither\nis it shameful, since it is both independent of the will and not opposed\nto the general interest, but it is good, since it is seasonable and\nprofitable to and congruent with the universal. For thus too he is\nmoved by the deity who is moved in the same manner with the deity\nand moved towards the same things in his mind. ',
  },
  {
    book: 'Book Twelve',
    paragraph:
      'These three principles thou must have in readiness. In the things\nwhich thou doest do nothing either inconsiderately or otherwise than\nas justice herself would act; but with respect to what may happen\nto thee from without, consider that it happens either by chance or\naccording to Providence, and thou must neither blame chance nor accuse\nProvidence. Second, consider what every being is from the seed to\nthe time of its receiving a soul, and from the reception of a soul\nto the giving back of the same, and of what things every being is\ncompounded and into what things it is resolved. Third, if thou shouldst\nsuddenly be raised up above the earth, and shouldst look down on human\nthings, and observe the variety of them how great it is, and at the\nsame time also shouldst see at a glance how great is the number of\nbeings who dwell around in the air and the aether, consider that as\noften as thou shouldst be raised up, thou wouldst see the same things,\nsameness of form and shortness of duration. Are these things to be\nproud of? ',
  },
  {
    book: 'Book Twelve',
    paragraph:
      'Cast away opinion: thou art saved. Who then hinders thee from casting\nit away? ',
  },
  {
    book: 'Book Twelve',
    paragraph:
      "When thou art troubled about anything, thou hast forgotten this, that\nall things happen according to the universal nature; and forgotten\nthis, that a man's wrongful act is nothing to thee; and further thou\nhast forgotten this, that everything which happens, always happened\nso and will happen so, and now happens so everywhere; forgotten this\ntoo, how close is the kinship between a man and the whole human race,\nfor it is a community, not of a little blood or seed, but of intelligence.\nAnd thou hast forgotten this too, that every man's intelligence is\na god, and is an efflux of the deity; and forgotten this, that nothing\nis a man's own, but that his child and his body and his very soul\ncame from the deity; forgotten this, that everything is opinion; and\nlastly thou hast forgotten that every man lives the present time only,\nand loses only this. ",
  },
  {
    book: 'Book Twelve',
    paragraph:
      'Constantly bring to thy recollection those who have complained greatly\nabout anything, those who have been most conspicuous by the greatest\nfame or misfortunes or enmities or fortunes of any kind: then think\nwhere are they all now? Smoke and ash and a tale, or not even a tale.\nAnd let there be present to thy mind also everything of this sort,\nhow Fabius Catullinus lived in the country, and Lucius Lupus in his\ngardens, and Stertinius at Baiae, and Tiberius at Capreae and Velius\nRufus (or Rufus at Velia); and in fine think of the eager pursuit\nof anything conjoined with pride; and how worthless everything is\nafter which men violently strain; and how much more philosophical\nit is for a man in the opportunities presented to him to show',
  },
  { book: 'Book Twelve', paragraph: 'The End\n' },
]

const book = document.getElementById('book')
const paragraph = document.getElementById('meditation')
const page = document.getElementById('page')

let currentParagraphIndex = 0
const totalPages = paragraphs.length

function setContent(paragraphIndex) {
  // Update the contents of the div
  book.textContent = paragraphs[paragraphIndex].book
  paragraph.textContent = paragraphs[paragraphIndex].paragraph
  page.textContent = `${paragraphIndex + 1} / ${totalPages}`

  //   update the local storage
  localStorage.setItem('index', paragraphIndex)
}

function incrementIndex() {
  let nextIndex = currentParagraphIndex + 1
  if (nextIndex === totalPages) {
    nextIndex = 0
    setContent(nextIndex)
  } else {
    setContent(nextIndex)
  }
  currentParagraphIndex = nextIndex
}
function decrementIndex() {
  let nextIndex = currentParagraphIndex - 1

  if (nextIndex < 0) {
    nextIndex = totalPages - 1
    setContent(nextIndex)
  } else {
    setContent(nextIndex)
  }
  currentParagraphIndex = nextIndex
}

// set inital content based on date the user first visited the site
document.addEventListener('DOMContentLoaded', () => {
  currentParagraphIndex = localStorage.getItem('index')
  if (!currentParagraphIndex) {
    currentParagraphIndex = 0
    localStorage.setItem('index', currentParagraphIndex)
    setContent(currentParagraphIndex)
    return
  }
  currentParagraphIndex = parseInt(currentIndex) + 1
  localStorage.setItem('index', currentParagraphIndex)
  setContent(currentParagraphIndex)
})

// add button event listeners
const nextButton = document.getElementById('next')
const prevButton = document.getElementById('previous')
nextButton.addEventListener('click', incrementIndex)
prevButton.addEventListener('click', decrementIndex)
